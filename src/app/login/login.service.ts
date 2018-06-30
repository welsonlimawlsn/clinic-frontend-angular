import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CLINIC_API} from '../app-constants';

@Injectable()
export class LoginService {

  user: User;

  constructor(private http: HttpClient) {
  }

  login(userLogin: User): Observable<User> {
    return this.http.post<User>(`${CLINIC_API}/login`, userLogin).pipe(tap(user => this.user = user));
  }


}
