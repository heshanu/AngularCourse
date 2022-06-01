import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { map, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { flush } from '@angular/core/testing';

const AUTH_DATA = 'auth_data';

@Injectable({
  providedIn: 'root'
})

export class AuthStore {
 // private subject = new BehaviorSubject<User>(null);

  //user$:Observable<User> = this.subject.asObservable();
/*
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

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
