import React, { useState, useEffect } from "react";

function UserForm({ onAdd, editUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setAge(editUser.age);
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age) {
      alert("Fill all fields");
      return;
    }

    onAdd({
      id: editUser ? editUser.id : null,
      name,
      age,
    });

    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit">
        {editUser ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default UserForm;