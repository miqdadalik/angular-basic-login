import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(
        private http: HttpClient
    ) {

    }

    public verfiyLogin() {
        return this.http.get('/assets/data/users.json')
    }
}
