import React, { Component } from "react";
import api from "./api";

class App extends Component{


  state = {
    users: [],

  }

  async componentDidMount(){
    const  response = await api.get('');
    this.setState({users: response.data});
  }

  render(){

    const {users} = this.state;

    return(

      <div>
        <h1> List Users </h1>
        {console.log(users)}
        {users.map(user =>(
          <li key={user.id}>

          </li>
        ))}

      </div>

    );


  }

};

export default App;
