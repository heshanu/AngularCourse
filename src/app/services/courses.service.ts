import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Lesson } from '../model/lesson';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  //insert data to databse
  create(user: any): Observable<any> {
    return this.http.post(`${environment.baseAPIUrl}/users.json`, user);
  }

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

  update(customer: any, id: string): Observable<any> {
    return this.http.put(
      `${environment.baseAPIUrl}/users/${id}.json`,
      customer
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.baseAPIUrl}/users/${id}.json`);
  }
}
