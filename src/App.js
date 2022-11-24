import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUserName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const createUser = () => {
    axios
      .post("http://localhost:3001/createUser", {
        name: name,
        age: age,
        username: username,
      })
      .then((response) => {
        alert("User created successfully!");
        setListOfUsers([
          ...listOfUsers,
          { name: name, age: age, username: username },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h2>Name: {user.name}</h2>
              <h2>Name: {user.age}</h2>
              <h2>Name: {user.username}</h2>
              <hr />
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
