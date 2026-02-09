import React, { useEffect, useState } from "react";
import { userSchema } from "./config/userSchema";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "./services/userService";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (data) => {
    if (selectedUser) {
      await updateUser(selectedUser.id, data);
      setSelectedUser(null);
    } else {
      await createUser(data);
    }
    loadUsers();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this user?")) {
      await deleteUser(id);
      loadUsers();
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">User Management</h3>

      <UserForm
        schema={userSchema}
        onSubmit={handleSubmit}
        selectedUser={selectedUser}
        onCancel={() => setSelectedUser(null)}
      />

      <UserList
        users={users}
        onEdit={setSelectedUser}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
