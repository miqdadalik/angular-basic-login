import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    public loginForm: any;
    public invalidUser: boolean;
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private appService: AppService,
        private loginService: LoginService
    ) {

        this.invalidUser = false;
        this.createLoginForm();
    }

    public doLogin = () => {
        this.invalidUser = false;
        if(this.loginForm.value.userName && this.loginForm.value.password) {
            console.log('validate');
            this.loginService.verfiyLogin()
                .subscribe((response: any) => {
                    if (response.users && response.users.length){
                        let userFound = response.users.find((user: any) => {
                            return user.username === this.loginForm.value.userName && this.loginForm.value.password === user.password;
                        });
                        if (userFound && userFound.username) {
                            this.appService.storeUser(userFound);
                            this.router.navigate(['/home']);
                        } else {
                            this.invalidUser = true;
                        }
                    }
                })
        }
    }

    private createLoginForm = () => {

        this.loginForm = this.fb.group({
            userName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }
}
