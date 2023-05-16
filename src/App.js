import React, { useEffect, useState } from 'react';
import './App.css';

//https://jsonplaceholder.typicode.com/users

//inside this page, we want to fetch data through api and using the useEffect and useState hook to record the state and update the state

//since the data is going to store the API data, so the initialState should be an object

function App() {
  //remember the hooks cannot be called in the top level
  const [data,setData] = useState([]);

  useEffect(() => {
    loadData();
  },[]);

  //for the first example, we are using an arrow function to do the async fetch data
  //this example is not needed to use the async and await because the then key word also has the same functionality
  const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    //after fetching the array from api, we will turn it into json format
    .then(response => response.json())
    .then(receivedData => setData(receivedData))
  }


  //for the second example, we are using a simple function to do the async fetch data
  //if we do not use the async and await in the second example, we will got an error because at the first place, the const api is empty
  //so we need to add the async and await into the function
  // async function getData (){
  //   const api = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const result = await api.json();
  //   setData(result);
  // }



  //console.log(data)

  return (
    <div className="App">
      <p>Fetch / Async / Await</p>
      {data.map(user => (
        <div key={user.id}><p>{user.name}, {user.username}</p></div>
      ))}
    </div>
  );
}

export default App;
