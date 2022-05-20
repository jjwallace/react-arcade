import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import socketIOClient from "socket.io-client";
import QRCode from "react-qr-code";
import ip from "ip";
import Connect from "../socket/Connect";
import EnterPlayerName from "../component/EnterPlayerName/EnterPlayerName";

import './styles.css';

export default class Game extends Component {
  state = {
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#24252A');
        },
        create: function() {
          this.helloWorld = this.add.text(
            this.cameras.main.centerX, 
            this.cameras.main.centerY, 
            "Hello World", { 
              font: "40px Arial", 
              fill: "#ffffff" 
            }
          );
          this.helloWorld.setOrigin(0.5);
          console.log('create function operational')
        },
        update: function() {
          this.helloWorld.angle += 1;
        }
      }
    }
  }

  render() {
    //window.location
    //ip.address() 
    //window.location.locationetUserIP

    console.log("LOAD QR: ", ip.address() );

    const { initialize, game } = this.state;
    return (
      <div className="content-container">
        <EnterPlayerName />
        <QRCode value={ip.address() + 'controller'} className="qrcode" />
        <IonPhaser game={game} initialize={initialize} />
      </div>
    )
  }
}