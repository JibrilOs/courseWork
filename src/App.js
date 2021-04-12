// import React, { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [search,  setSearch]  =useState("");
//   const [isLoading,setIsloading]=useState(false)
//   const fetchData =  () => {
//      setIsloading(true);
//     fetch(`https://api.github.com/search/repositories?q=${search}`)
//       .then((response) => {

//        return  response.json()})
//       .then((resData) => {
//         return setUsers(resData.items)

//       });

//       setIsloading(false);

//   };

//   // useEffect(() => {
//   // fetchData();
//   // }, []);
//   if(isLoading) return <h1>Loading</h1>

//   return (
//     <div className="App">
//       <h1>Repository</h1>
//       <div>
//         <input
//           type="text"
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//         />
//         <button onClick={fetchData}>search</button>
//       </div>

//         <table>
//           <tbody>
//             <tr className="cen">
//               <td>Name</td>
//               <td>URL</td>
//             </tr>
//             {users.map((user, index) => (
//               <tr key={index} className="wrapper">
//                 <td className="full_name">{user.full_name}</td>
//                 <td className="url">{user.url}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//     </div>
//   );
// }

import React, { useState } from "react";
import "./App.css";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

function App() {
  const [todo, setTodo] = useState({ description: "", date: "", status: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", status: "" });
  };

  return (
    <div className="App">
      <input
        placeholder="Description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <input
        placeholder="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <input
        placeholder="Status"
        name="status"
        value={todo.status}
        onChange={inputChanged}
      />
      <button onClick={addTodo}>Add</button>
      <div
        className="ag-theme-material"
        style={{ height: 600, width: 600, margin: "auto" }}
      >
        <AgGridReact rowData={todos} animateRows={true}>
          <AgGridColumn
            field="description"
            sortable={true}
            filter={true}
            suppressMovable={true}
          ></AgGridColumn>
          <AgGridColumn
            field="date"
            sortable={true}
            filter={true}
            suppressMovable={true}
          ></AgGridColumn>
          <AgGridColumn
            field="status"
            sortable={true}
            filter={true}
            suppressMovable={true}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
