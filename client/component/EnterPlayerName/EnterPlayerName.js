
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Connect from "../../socket/Connect";
import { Controls, PlayState, Tween } from 'react-gsap';
import gsap from "gsap";

import './component.css';

export default class EnterPlayerName extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  state = {
    name: ""
  };
  
  container = React.createRef();

  componentDidMount = () => {
    //setInterval(this.send(), 1000)
    // Connect.socket.on('change color', (col) => {
    //     document.body.style.backgroundColor = col
    // })
    //gsap.to(".submit-box", {y: -300, duration: 3, ease: "strong.inOut"});
  }

  // pushButton(color){
  //   this.setState({ color })
  //   Connect.emit('change color', color) 
  // }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    var finalName = this.state.name;
    this.setState({finalName: finalName});
    if(finalName == ""){
      gsap.to(".submit-name-box", {x:"+=20", duration: 0.1, yoyo:true, repeat:5, ease: "introWiggle"});
      gsap.to(".submit-name-box", {backgroundColor: "#ffAF50", duration: 0.1, yoyo:true, ease: "strong.inOut"});
      gsap.to(".submit-name-box", {backgroundColor: "white", duration: 0.9, delay: 0.1, yoyo:true, ease: "strong.inOut"});
      return;
    }
    
    gsap.to(".submit-name-box", {backgroundColor: "#4CAF50", duration: 1, ease: "strong.inOut"});
    gsap.to(".submit-name-bound", {scale: 0, height: 0, backgroundColor: "#4CAF50", duration: 0.3, ease: "strong.inOut"});
    gsap.to(".submit-name-title", {fontSize: 30, duration: 1, ease: "strong.inOut"});
    gsap.to(".submit-box", {y: -300, delay: 1, duration: 3, ease: "strong.inOut"});

    console.log('change name', finalName);
    Connect.emit('change name', finalName);
  }
  

  render() {

    return (
      <div className="submit-box">
          <Tween to={{ y: '0px'}} from={{y: '-300px'}} duration={2} ease="back.out(1.7)">
            <div className="submit-name-box">
              <div className="submit-name-title">
                    {this.state.finalName}
              </div>
              <div className="submit-name-bound">
                <form onSubmit={this.handleSubmit}>
                  <input className="submit-name"  type="text" placeholder="Player Name" onChange={this.handleChange} />
                  <button className="submit-name-button" type="submit">	&#x27A1;</button>
                </form>
              </div>
            </div>
          </Tween>
      </div>
    )
  }
}

