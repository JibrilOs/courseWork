import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const search="python"
const fetchData=()=>{
  fetch(`https://api.github.com/search/repositories?q=${search}`)
    .then((response) => response.json())
    .then((resData) => setUsers(resData.items));

}

  useEffect(() => {
  fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Repository</h1>
      <table>
        <tbody>
          <tr className="cen">
            <td>Name</td>
            <td>URL</td>
          </tr>
          {users.map((user, index) => (
            <tr key={index} className="wrapper">
                <td className="full_name">{user.full_name}</td>
                <td className="url">{user.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
