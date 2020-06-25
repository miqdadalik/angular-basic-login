import { Injectable } from "@angular/core";

@Injectable()

export class AppService {
    private user: any;
    constructor() {}

    storeUser = (user) => {
        this.user = user;
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    getUser = () => {
        if (this.user && this.user.username) {
            return this.user;
        }

        let user = sessionStorage.getItem('user')
        if (user) {
            try {
                this.user = JSON.parse(user);
                return this.user
            } catch(e) {}
        }

        return false;
    }

    deleteUser = () => {
        sessionStorage.removeItem('user');
        this.user = {};
    }
}
