import React, {useEffect, useRef} from "react";
import io from "socket.io-client";
import auth from "../../store/auth.js";
import wsRoomLobby from "../../store/ws-room-lobby";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes/routes";

const SERVER_URL = "http://localhost:5000";

const WrapperWithWebsocket = ({gameMode, children}) => {
    let navigate = useNavigate();
    const socketRef = useRef(null);

    useEffect(() => {
        if (!auth.user) {
            navigate(ROUTES.LOBBY);
        }
    }, []);

    useEffect(() => {
        socketRef.current = io(SERVER_URL, {
            query: {gameMode},
        });

        socketRef.current.emit("user:add", auth.user);
        socketRef.current.on("users", (users) => {
            wsRoomLobby.onlineUsers = users;
        });

        socketRef.current.on("connect", () => {
            wsRoomLobby.isConnected = true;
        });

        socketRef.current.on("disconnect", () => {
            wsRoomLobby.isConnected = false;
        });

        return () => {
            wsRoomLobby.clear();
            socketRef.current.disconnect();
        };
    }, [gameMode]);

    return <div>{React.cloneElement(children, {socketRef})}</div>;
};

WrapperWithWebsocket.propTypes = {};

export default WrapperWithWebsocket;
