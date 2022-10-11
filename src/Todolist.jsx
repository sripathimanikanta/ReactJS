import React, { useState } from "react";

let heading = {
  color: "white",
  backgroundColor: "purple",
  textAlign: "center",
  // marginTop: "2em",
  width: "80%",
  margin: "0 auto",
  marginTop: "1em",
};
let container = {
  width: "100%",
  height: "100vh",
  borderRadius: "1em",
  padding: "1em",
};
let inputText = {
  border: 0,
  borderBottom: "1px solid purple",
  outline: "none",
};
let listWrite = {
  margin: "0 15%",
  padding: "1em",
};
let button = {
  backgroundColor: "purple",
  borderRadius: "50%",
  border: 0,
  padding: "1em",
  marginLeft: "1em",
  outline: "none",
};
let small_container = {
  width: "80%",
  margin: "0 auto",
  boxShadow: "0 0 1em 0em rgba(0,0,0,.5)",
};


export default function Todolist() {
  
  let [inputList, setInputList] = useState('');
  let [Items, setItems] = useState([]);

  function addThislistfunc(e) {
    setInputList(e.target.value);
  }

  let listOfTheItems = () => {
    setItems((oldvalues) =>{
      return[...oldvalues, inputList]
    })
    setInputList('');
  };
  return (
    // <div>
    //     lol
    // </div>
    <>
      <div style={container}>
        <div style={small_container}>
          <h1 style={heading}>ToDo List</h1>
          <div className="listWrite" style={listWrite}>
            <div>
              <input
                className="ins"
                style={inputText}
                placeholder="Add a item"
                type="text"
                //   name=""
                //   id=""
                onChange={addThislistfunc}
                value={inputList}
              />
              <button onClick={listOfTheItems} style={button}>
                +
              </button>
            </div>
          </div>
          <ol>
            {/* <li>{inputList}</li> */}
            <ToDOLists items={Items} />
          </ol>
        </div>
      </div>
    </>
  );
}

const ToDOLists = (props) =>{

  const deleteItems = ()=>{
    console.log("deleted")
  }

  return(
    <>
    {props.items.map( e => {
      return (
        <>
        <li  style={{display: "inline",listDecoration: "none"}}>{e}</li>
        <span style={{cursor: "pointer"}} onClick={deleteItems}> ❌</span>
        {/* <button style={{display: "inline"}}></button>  */}
        <br/>
      </>
      )
      })}
    </>
  )
}
