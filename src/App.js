import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

 const App = () => {
    const [inputList , setinputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvents = (event) => {
        setinputList(event.target.value);
    }
    const listAdd = () => {
        setItems((olditem) => {
            return [...olditem,inputList];
        })
        setinputList("");
    }
    const deleteItems =(id) => {
        console.log("deleted");
        setItems((olditem) => {
            return olditem.filter((arrElement,index) => {
                return index !== id;
            })
        })
    }
    return(
        <>
        <div className="main_div">
         <div className="center_div">
          <br/>
          <h1>Task List</h1>
          <br/>
          <input type="text" placeholder="Add Tasks" onChange={itemEvents}
           value={inputList} />
          <button onClick={listAdd}> + </button>
          <ol>
            {/* <li>{inputList}</li> */}
            
            {Items.map((itemval,index) => {
                //component
                return <ToDoLists
                key = {index}
                id = {index}
                text={itemval}
                onSelect = {deleteItems}
                />;
            } )}
          </ol>
         </div>
        </div>
        </>
    );
 };

 export default App;