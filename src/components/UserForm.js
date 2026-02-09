import React, { useState, useEffect } from "react";

const UserForm = ({ schema, onSubmit, selectedUser, onCancel }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(selectedUser || {});
    setErrors({});
  }, [selectedUser]);

  const validate = () => {
    let newErrors = {};

    schema.forEach(field => {
      const value = formData[field.name] || "";

      if (field.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
      }

      if (field.pattern && value && !field.pattern.test(value)) {
        newErrors[field.name] = `Invalid ${field.label}`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">
      <h5>{selectedUser ? "Edit User" : "Add User"}</h5>

      {schema.map(field => (
        <div className="mb-3" key={field.name}>
          <label className="form-label">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className={`form-control ${errors[field.name] ? "is-invalid" : ""}`}
          />
          {errors[field.name] && (
            <div className="invalid-feedback">
              {errors[field.name]}
            </div>
          )}
        </div>
      ))}

      <div>
        <button type="submit" className="btn btn-primary me-2">
          {selectedUser ? "Update" : "Create"}
        </button>
        {selectedUser && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
