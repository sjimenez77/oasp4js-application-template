import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BusinessOperationsService } from '../../core/shared/business-operations.service';

@Injectable()
export class LoginService {

    constructor(public router: Router,
                private BO: BusinessOperationsService,
                private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(this.BO.login(),
            {
                j_username: username,
                j_password: password
            },
            {
                withCredentials: true,
                responseType: 'text'
            }
        );
    }

    logout() {
        return this.http.get(this.BO.logout(), { responseType: 'text' });
    }

    getCsrf(): Observable<any> {
        return this.http.get(this.BO.getCsrf(), { withCredentials: true });
    }
}
