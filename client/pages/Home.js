
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Connect from "../socket/Connect";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "localhost:4001",

      ///
      color: 'white'
      ///

    };
  }

  pushButton(color){
    this.setState({ color })
    Connect.emit('change color', color) 
  }

  componentDidMount = () => {
      //setInterval(this.send(), 1000)
      // Connect.socket.on('change color', (col) => {
      //     document.body.style.backgroundColor = col
      // })
  }

  render() {

    return (
      <div style={{ textAlign: "center" }}>

        <button id="blue" onClick={() => this.pushButton('blue')}>Blue</button>
        <button id="red" onClick={() => this.pushButton('red')}>Red</button>

      </div>
    )
  }
}
export default Home;
