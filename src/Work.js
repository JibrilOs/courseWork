// import React, { useState } from "react";
// import "./App.css";
// import Navbar from "./Navbar";
// import Textfield from "./Textfield";
// import Buttons from "./Button";
// import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from "@material-ui/icons/Delete";
// import Button from "@material-ui/core/Button"

// function App() {
//   const [todo, setTodo] = useState({ description: "", date: "" });
//   const [todos, setTodos] = useState([]);

//   const inputChanged = (event) => {
//     setTodo({ ...todo, [event.target.name]: event.target.value });
//   };

//   const addTodo = () => {
//     setTodos([...todos, todo]);
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <Textfield
//         label="Description"
//         name="description"
//         onchange={inputChanged}
//       />
//       <Textfield label="Date" type="date" name="date" onchange={inputChanged} />

//       <Buttons onClick={addTodo} />

//       <div>
//         {todos.map((item, id) => (
//           <div key={item.id}>
//             <span>{item.description}</span>{" "} <span>{item.date}</span>
//             <IconButton aria-label="delete" color="secondary">
//               <DeleteIcon fontSize="normal" />
//             </IconButton>
//             <div><Button variant="contained" style={{background:"grey",color:"white"}}>delete todo</Button></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
