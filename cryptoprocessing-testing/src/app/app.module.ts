import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { AuthenticationService } from './services/authentication.service';
import { BackendDomainService } from './services/backend-domain.service';

import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [
        AuthenticationService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        BackendDomainService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
