import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import socketIOClient from "socket.io-client";
import QRCode from "react-qr-code";
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
    

    const { initialize, game } = this.state;
    return (
      <div class="phaserContent">
        <QRCode value={window.location + 'controller'} class="qrcode" />
        <IonPhaser game={game} initialize={initialize} />
      </div>
    )
  }
}