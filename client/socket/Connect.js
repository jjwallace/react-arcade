
import socketIOClient from "socket.io-client";

class Connect {
    
    constructor(){
        const config = {
            endpoint: "localhost:4001"
        }

        // if(Singleton._instance){
        //     console.warn("already created!");
        //     return Singleton._instance;
        // }

        // Singleton._instance = this;

        console.log("singleton created");
        this._createdTime = new Date();

        this.socket = socketIOClient(config.endpoint);

        this.socket.on("hello from server", (...args) => {
            console.log('Got this from server, ', args)
        });
    }

    // static instance() {
    //     if(!Singleton._instance){
    //         return new Singleton();
    //     }

    //     return Singleton._instance;
    // }

    emit(title, data){
        console.log("Emit Data '" + title + "' : ", data);
        this.socket.emit(title, data) 
    }

    createdTime() {
        return this._createdTime.toISOString();
    }
}

const instance = new Connect();
Object.freeze(instance);

export default instance;