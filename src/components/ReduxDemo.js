import React, { Component } from 'react';
import { createStore } from 'redux';
import SendHero from './SendHero';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class ReduxDemo extends React.Component {
  render(props){
    console.log(props);

//Reducer must go first to be initialized for the store
//the fat arrow function below can also be written function(state,action){..



//make the store



//the store must subscribed


// store.subscribe(() => {
//   console.log("Store is now", store.getState());
// })



    return (
      <div>
        <button onClick={SendHero.handleClick}>Attack!!</button>
        <button onClick={SendHero.handleClick2}>Green Attack!!</button>


      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    heroes: state
  }
}

ReduxDemo = connect()(ReduxDemo);
export default ReduxDemo;

    // <p>{store.subscribe(() => {store.getState()})}</p>
