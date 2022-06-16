import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private router: Router, private http: HttpClient) {}
  loginUser(email: string, password: string): Observable<any> {
    var users: any[] = [];

    return this.http.get(`${environment.baseAPIUrl}/users.json`).pipe(
      map((res: any) => {
        var isSuccess = false;

        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            users.push({ ...res[key], id: key });
            console.log(users);
          }
        }

        for (const user in users) {
          if (
            users[user]['email'] == email &&
            users[user]['password'] == password
          ) {
            isSuccess = true;

            break;
          } else {
            continue;
          }
        }

        return isSuccess;
      })
    );
  }
}
