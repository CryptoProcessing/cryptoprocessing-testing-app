import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private authService: AuthenticationService) { }

    ngOnInit() {
    }

    register() {
        this.authService.login('mitin@phystech.edu', 'password').subscribe(
            res => console.log(res));
    }
}
