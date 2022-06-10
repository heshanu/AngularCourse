import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { map, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { flush } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

const AUTH_DATA = 'auth_data';

@Injectable({
  providedIn: 'root',
})

export class AuthStore {
  //private subject = new BehaviorSubject<User>();

  //user$:Observable<User> = this.subject.asObservable();

  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.baseAPIUrl}/users.json`).pipe(
      map((res: User) => {
        const customers: any[] = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            customers.push({res, id: key });
          }
        }
        return customers;
      })
    );
  }

  getUsers() {
    return this.http.get(`${environment.baseAPIUrl}/users.json`).pipe(
      map(res => {
      const data = res;
      return data;
    }))
  }
  /*

  constructor(private http: HttpClient) {
   // this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));

    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));

    const user = localStorage.getItem(AUTH_DATA);

    if (user) {
     // this.subject.next(JSON.parse(user));
    }
  }



  logout() {
    //this.subject.next();
    localStorage.removeItem(AUTH_DATA);
  }*/

}
