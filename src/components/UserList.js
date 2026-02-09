import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead className="table-light">
        <tr>
          {users.length > 0 &&
            Object.keys(users[0])
              .filter(key => key !== "id")
              .map(key => <th key={key}>{key}</th>)
          }
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            {Object.keys(user)
              .filter(key => key !== "id")
              .map(key => <td key={key}>{user[key]}</td>)
            }
            <td>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
