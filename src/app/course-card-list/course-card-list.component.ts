//import { Component, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Course } from '../model/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { filter, tap } from 'rxjs/operators';
import { CoursesStore } from '../services/courses.store';
//import { throws } from 'assert';
@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardListComponent implements OnInit {
  @Input()
  //courses: Course[] = [];
  courses:any|null;

  @Output()
  private coursesChanged = new EventEmitter();

  constructor(private dialog: MatDialog, private coursesStore: CoursesStore) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.coursesStore.getAll().subscribe((res:any) => {
      console.log(res);
      this.courses = res;
    });
  }

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter((val) => !!val),
        tap(() => this.coursesChanged.emit())
      )
      .subscribe();
  }
}
