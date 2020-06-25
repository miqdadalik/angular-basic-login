import { Component } from "@angular/core";
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    public user: any;
    constructor(
        private router: Router,
        private appService: AppService
    ) {
        this.getUser();
    }

    doLogout = () => {
        this.appService.deleteUser();
        this.router.navigate(['']);
    }
    getUser = () => {
        this.user = this.appService
            .getUser();

        if (!this.user || !this.user.username) {
            this.router.navigate(['']);
        }
    }
}
