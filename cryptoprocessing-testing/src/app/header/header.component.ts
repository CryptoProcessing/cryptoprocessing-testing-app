import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';
import { BackendDomainService } from '../services/backend-domain.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    authForm: FormGroup;
    currentUser = null;

    domains = [];
    currentDomain = null;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthenticationService,
        private domainService: BackendDomainService) { }

    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.updateUser();
        this.domains = this.domainService.domainList;
        this.currentDomain = this.domains[0];
    }

    onSubmit(method = 'login') {
        console.log(method);

        if (this.authForm.invalid) {
            return;
        }

        if (method === 'login') {
            this.authService.login(
                this.authForm.controls.email.value, 
                this.authForm.controls.password.value).subscribe(
                    data => {
                        this.updateUser();
                    });
        } else if (method === 'register') {
            this.authService.register(
                this.authForm.controls.email.value, 
                this.authForm.controls.password.value).subscribe(
                    data => {
                        this.updateUser();
                    });
        }
    }

    logout() {
        this.authService.logout();
        this.updateUser();
    }

    updateUser() {
        this.currentUser = this.authService.getCurrentUser();
        console.log(this.currentUser);
    }

    updateDomain(domain) {
        this.currentDomain = domain;
        this.domainService.setCurrentDomain(domain);
    }
}
