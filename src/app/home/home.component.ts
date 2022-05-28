//import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesStore } from '../services/courses.store';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  beginnerCourses$!: Observable<Course[]>;

  advancedCourses$!: Observable<Course[]>;

  constructor(
    private coursesStore: CoursesStore,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    this.beginnerCourses$ = this.coursesStore.filterByCategory('BEGINNER');

    this.advancedCourses$ = this.coursesStore.filterByCategory('ADVANCED');
  }
}
