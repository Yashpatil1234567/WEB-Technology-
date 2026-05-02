import React from "react";

function UserList({ users, onDelete, onEdit }) {
  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No users</p>
      ) : (
        users.map((user) => (
          <div key={user.id} style={styles.card}>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>

            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
  },
};

export default UserList;