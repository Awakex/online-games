import React, {useEffect} from "react";
import auth from "./store/auth";
import "./index.sass";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES_COMPONENTS} from "./routes/routes";
import "./config/app";
import {observer} from "mobx-react-lite";
import AuthorizationModal from "./entries/authorization-modal/authorization-modal";
import NavBar from "./entries/navbar/navbar";

const App = observer(() => {
    useEffect(() => {
        auth.initializeUser();
    }, []);

    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar />
                <div className="wrapper">
                    <div className="content">
                        {!auth.isInit && <AuthorizationModal isOpen={true} />}

                        <Routes>
                            {ROUTES_COMPONENTS.map((route) => (
                                <Route key={route.id} path={route.path} element={route.component} />
                            ))}
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
});

export default App;
