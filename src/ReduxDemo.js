import React, { Component } from 'react';
import { createStore } from 'redux';



class ReduxDemo extends React.Component {
  render(){

//Reducer must go first to be initialized for the store
//the fat arrow function below can also be written function(state,action){..

    const reducer = (state, action) => {
      if (action.type === "ATTACK") {
        return action.payload;
      }
      if (action.type=== "GREENATTACK") {
        return action.payload;
      }
      return state;
    }

//make the store

const store = createStore(reducer, "Peace");

//the store must subscribed


store.subscribe(() => {
  console.log("Store is now", store.getState());
})

//you must dispach an action for the payload to change the state of the store
function handleClick(){
  store.dispatch({type: "ATTACK", payload: "Iron man"})
}

function handleClick2(){
  store.dispatch({type: "GREENATTACK", payload: "Hulk"})
}






    return (
      <div>
        <button onClick={handleClick}>Attack!!</button>
        <button onClick={handleClick2}>Green Attack!!</button>
        <p>{store.subscribe(() => {store.getState()})}</p>

      </div>

    );
  }
}


export default ReduxDemo;
