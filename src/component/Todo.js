import React, { useState } from "react";
import Todolists from "./Todolists";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Clock from "./Clock";
import "../css/clock.css";

const Todo = (props) => {
  const [todolist, setTodolist] = useState("");
  const [notes, addnotes] = useState([]);

  // adding items to array 
  const addbtn = () => {
    if (todolist !== "") {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;

      let newItem = {
        todolist,
        isHearted: false,
        isCompleted: false,
        todayDate : dateTime
      }
      addnotes([...notes, newItem]);
      setTodolist("");
    }

  }

  // logout button function 
  const logoutbtn = () => {
    props.logout();
  };

  // deleting items function 
  const deleteItems = (id) => {
    addnotes((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };


  return (
    <>
      <div className="todo_header" >
        <span className="alert alert-dark">Todo: {notes.length} </span>
        <Clock />
        <button className="btn btn-secondary" onClick={() => logoutbtn()}><ExitToAppIcon /></button>
      </div>

     
      <div className="todo_main" >
        <h2 style={{textAlign:"center"}}>ToDo Gram</h2>
        <h6 style={{textAlign:"center"}}>Your todo lists</h6>


        <div className="form-group mt-3" style={{textAlign:"center"}}>
          <textarea className="form-group form-control col-10" style={{margin:"auto"}}
            placeholder=" write something..."
            name="textareaname"
            rows="4"
            cols="90"
            onChange={(e) => setTodolist(e.target.value)}
            value={todolist}>
          </textarea>
      
          <button type="submit" className="btn btn-secondary mt-3" onClick={() => addbtn()}>Add Note</button>
          <button className="btn btn-danger mx-2 mt-3" onClick={() => addnotes([])}>Clear All</button>
        </div>

        {/* list items mappping area  */}
        <div>
          {
            notes.map((val, index) => {
              return (
                <div className="todo_li_items" key={index} >
                  <Todolists val={val} id={index} onDelete={deleteItems} todonotes={notes} addnotes={addnotes}/>
                </div>
              )
            })
          }
        </div>
        {/* ---end of map area---  */}

      </div>
    </>
  );
};

export default Todo;
