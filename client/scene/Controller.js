
import Phaser from 'phaser';

export default class Controller extends Phaser.Scene {

    init() {
      this.cameras.main.setBackgroundColor('#24252A');
    }

    create() {
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
    }

    update() {
      this.helloWorld.angle += 1;
    }
}