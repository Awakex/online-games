import {makeAutoObservable} from "mobx";
import {nanoid} from "nanoid";

class Auth {
    user = null;
    isInit = false;

    constructor() {
        makeAutoObservable(this);
    }

    initializeUser() {
        this.user = this.getUser();
        if (this.user) {
            this.isInit = true;
        }
    }

    getUser() {
        let userRecord = localStorage.getItem("user");
        if (userRecord) {
            return JSON.parse(userRecord);
        }

        return null;
    }

    generateUser(username) {
        let id = nanoid(6);
        let user = {
            id,
            username,
        };

        localStorage.setItem("user", JSON.stringify(user));
        this.initializeUser();
    }
}

export default new Auth();
