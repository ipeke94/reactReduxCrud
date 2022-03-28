import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser } from "./features/Users";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  return (
    <div className="App">
      {""}
      <div className="addUser">
        <input type="text" className="user-name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" className="user-username" onChange={(e) => setUserName(e.target.value)} placeholder="Surname" />
        <button className="user-add-button" onClick={() => dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username }))}>
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => (
          <div>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
