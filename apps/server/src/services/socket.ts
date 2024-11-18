import { Server } from "socket.io";
class SocketService{
    private _io: Server;
    constructor(){
        console.log("Init socket service...");
        this._io = new Server({
            cors: {
                allowedHeaders: ["*"],
                origin: "*",
            },
        });
    }

    public initListener(){
        const io = this.io;
        console.log("Initialized socket listener..");
        
        io.on("connect", (socket) => {
            console.log('New Socket Connected...', socket.id);
            
            socket.on("event:message", async ({message}: {message: string}) =>{
                console.log("New message Rec.", message);
            });
        })
    }

    get io(){
        return this._io;
    }
}

export default SocketService;