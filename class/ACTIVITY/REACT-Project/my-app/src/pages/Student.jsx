import React from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

function Students({ users, onAdd, onDelete, onEdit, editUser }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Manage Students</h2>

      <UserForm onAdd={onAdd} editUser={editUser} />
      <UserList users={users} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default Students;