import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Course, sortCoursesBySeqNo } from '../model/course';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading/loading.service';
import { MessagesService} from '../messages/message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CoursesStore {
  private subject = new BehaviorSubject<Course[]>([]);

  courses$: Observable<Course[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private messages:MessagesService
  ) {
   // this.loadAllCourses();
  }
/*
  private loadAllCourses() {
    const loadCourses$ = this.http.get<Course[]>('/api/courses').pipe(
      map((response: any) => response['payload']),
      catchError((err: any) => {
        const message = 'Could not load courses';
        this.messages.showErrors(message);
        console.log(message, err);
        return throwError(err);
      }),
      tap((courses: any) => this.subject.next(courses))
    );

    this.loading.showLoaderUntilCompleted(loadCourses$).subscribe();
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    const courses = this.subject.getValue();

    const index = courses.findIndex((course: any) => course.id == courseId);

    const newCourse: Course = {
      ...courses[index],
      ...changes,
    };

    const newCourses: Course[] = courses.slice(0);

    newCourses[index] = newCourse;

    this.subject.next(newCourses);

    return this.http.put(`/api/courses/${courseId}`, changes).pipe(
      catchError((err: any) => {
        const message = 'Could not save course';
        console.log(message, err);
        this.messages.showErrors(message);
        return throwError(err);
      }),
      shareReplay()
    );
  }
*/
  filterByCategory(category: string): Observable<Course[]> {
    return this.courses$.pipe(
      map((courses: any) =>
        courses
          .filter((course: any) => course.category == category)
          .sort(sortCoursesBySeqNo)
      )
    );
  }
  create(course: any): Observable<any> {
    return this.http.post(`${environment.baseAPIUrl}/course.json`, course);
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.baseAPIUrl}/course.json`)
      .pipe(
        map((res:any) => {
          const courses: any[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              courses.push({...res[key], id: key});
            }
          }
          return courses;
        })
      );
  }

  update(course: any, id: string): Observable<any> {
    return this.http.put(`${environment.baseAPIUrl}/course/${id}.json`, course);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.baseAPIUrl}/course/${id}.json`);
  }

}
