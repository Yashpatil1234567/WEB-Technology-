import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Student";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const handleAddUser = (user) => {
    if (editUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setEditUser(null);
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/students"
          element={
            <Students
              users={users}
              onAdd={handleAddUser}
              onDelete={handleDelete}
              onEdit={handleEdit}
              editUser={editUser}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;