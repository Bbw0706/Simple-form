import React, { Component } from 'react';
import '../style/App.css';

import Form from "./Form"

class App extends Component {
  constructor(){
    super();

    this.state = {
        firstName : "",
        lastName : "",
        age : "",
        email : "",
        date : "",
        gender : ""
    }
  }
  handleFirst(e){
    this.setState({
      firstName : e
    })
  }

  handleLast(e){
    this.setState({
      lastName : e
    })
  }

  handleAge(e){
    this.setState({
      age : e
    })
  }

  handleEmail(e){
    this.setState({
      email : e
    })
  }

  handleDate(e){
    this.setState({
      date : e
    })
  }

  handleGender(e){
    this.setState({
      gender : e
    })
  }

  handleSubmit(first,last,age,email,date,gender){
    fetch("/api", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({FirstName : first, LastName : last, Age : age , Email : email, Born : date, Gender : gender})
    })
    .then(res => res.json())
    this.setState({
      firstName : "",
      lastName : "",
      age : "",
      email : "",
      date : "",
      gender : ""
    })
  }
  render() {
    console.log(this.state.gender)
    return (
      <div className="container">
      <br/>
        <div className="App">
          <h3 className="teal-text text-accent-4">Form</h3>
          <Form formState={{
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            age : this.state.age,
            email : this.state.email,
            date : this.state.date,
            gender : this.state.gender
          }} 
          
          handleChange={{
            handleFirst : this.handleFirst.bind(this),
            handleLast : this.handleLast.bind(this),
            handleAge : this.handleAge.bind(this),
            handleEmail : this.handleEmail.bind(this),
            handleDate : this.handleDate.bind(this),
            handleGender : this.handleGender.bind(this),
            Submit : this.handleSubmit.bind(this)
          }}/>
        </div>
        <br/>
      </div>
    );
  }
}

export default App;
