import {makeAutoObservable} from "mobx";

class WsRoomLobby {
    onlineUsers = null;
    isConnected = false;

    constructor() {
        makeAutoObservable(this);
    }

    clear() {
        this.onlineUsers = null;
    }
}

export default new WsRoomLobby();
