import LobbyPage from "../pages/lobby-page/lobby-page";
import React from "react";
import {Navigate} from "react-router-dom";
import ContainersPage from "../pages/containers-page/containers-page";
import {GAME_MODES} from "../config/app";
import WrapperWithWebsocket from "../entries/wrapper-with-websocket/wrapper-with-websocket";

export const ROUTES = {
    ROOT: "/",
    LOBBY: "/lobby",
    GAMES: {
        ROOT: "/games",
        CONTAINERS: "/games/containers",
    },
};

export const ROUTES_COMPONENTS = [
    {id: 1, path: ROUTES.ROOT, component: <Navigate to={ROUTES.LOBBY} />},
    {id: 2, path: ROUTES.LOBBY, component: <LobbyPage />},
    {
        id: 3,
        path: ROUTES.GAMES.CONTAINERS,
        component: (
            <WrapperWithWebsocket gameMode={GAME_MODES[0].mode}>
                <ContainersPage />
            </WrapperWithWebsocket>
        ),
    },
];
