import React, { useState } from "react";

// let [usecount, setCounter] = useState(" ")

// function inputValue(e){
//   // console.log('clicked');
//   // console.log(e.target.value);
//   // console.log(typeof Window.count);
//   setCounter(e.target.value)
//   // console.log(window.count)
// }

// // console.log(count);

// return (
//   <div>
//     <h1>Hello {usecount}</h1>
//     <input type="text" placeholder='Enter Your Name' onChange={inputValue}/>
//     <button>Click me 😄</button>
//     <br />
//     <label htmlFor="search">Search: </label>
//     <input type="text" id="search" />
//   </div>
// )

const Form = () => {
  console.log("Form renders");
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  // const [searchTerm, setSearchTerm] = useState({
  //   toStoreInSearch:"",
  //   toBeSearched: ""
  // });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) =>{
    console.log(e.target.value)
    // searchButton(e)
    // setSearchTerm({toStoreInSearch : e.target.value})
    setSearchTerm(e.target.value)
  }

  const searchButton = e =>{
    setSearchTerm({
      toBeSearched : searchTerm.toBeSearched
    })
  }

// let  searchedStories = stories.filter( e => e.title.toLowerCase().includes(searchTerm.toBeSearched.toLowerCase()))
let  searchedStories = stories.filter( e => e.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <h1>My hacker Stories</h1>

      <Search onSearch={handleSearch} search={searchTerm} searchButton={searchButton}/>

      {/* render the list here: */}
      <List list={searchedStories} />
    </>
  );
};

const List = (props) => {
  console.log("list renders");
  return(
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);
    }

const Item = (props) => {
  console.log("Item renders");
  return(
  <li key={props.key}>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);
  }

const Search = (props) => {
  console.log("Search renders");
  const {onSearch, search} = props;
  // let [search, setSearch]= useState(' ');

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   // search = event.target.value;
  //   setSearch(event.target.value)
  //   props.onSearch(event)
  // };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input 
      type="text" id="search" 
      onChange={onSearch} 
      autoComplete="off"
      value={search}/>
      <button onClick={props.searchButton}>Search</button>
    </>
  );
};

export default Form;
