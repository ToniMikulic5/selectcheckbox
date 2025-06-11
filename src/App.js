import { useState } from "react";

const Users = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Marko", active: true },
  { id: 3, name: "Petar", active: false },
];

const App = () => {
  const [users, setUsers] = useState(Users);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const toggleUserSelection = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((x) => x !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const deleteSelected = () => {
    setUsers(users.filter((user) => !selectedUsers.includes(user.id)));
  };

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>
          <input
            type="checkbox"
            checked={selectedUsers.includes(user.id)}
            onChange={() => toggleUserSelection(user.id)}
          />
          {user.name} -- {user.active ? "Active" : "Inactive"}
        </li>
      ))}
      <button onClick={deleteSelected}>Delete Selected</button>
    </>
  );
};

export default App;
