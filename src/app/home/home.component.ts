//import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesStore } from '../services/courses.store';
import { CoursesService } from '../services/courses.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  beginnerCourses$!: Observable<Course[]>;

  advancedCourses$!: Observable<Course[]>;
courseB = [
    {
      title: 'Angular',
      author: 'heshn',
      duration: '3hr',
      fees: 200,
      image: '../../assets/download1.png',
    },
    {
      title: 'React',
      author: 'heshn',
      duration: '2hr',
      fees: 100,
      image: '../../assets/download1.png',
    },
    {
      title: 'React',
      author: 'heshn',
      duration: '2hr',
      fees: 100,
      image: '../../assets/download1.png',
    },
    {
      title: 'React',
      author: 'heshn',
      duration: '2hr',
      fees: 100,
      image: '../../assets/download1.png',
    },
    {
      title: 'React',
      author: 'heshn',
      duration: '2hr',
      fees: 100,
      image: '../../assets/download1.png',
    },
  ];


  courseA = [
  {
      title: 'Python',
      author: 'heshn',
      duration: '3hr',
      fees: 500,
      image: '../../assets/download2.png',
    },
    {
      title: 'React',
      author: 'heshn',
      duration: '2hr',
      fees: 100,
      image: '../../assets/download1.png',
    },
    {
      title: 'React',
      author: 'heshn',
      duration: '2hr',
      fees: 100,
      image: '../../assets/download1.png',
    },
    {
      title: 'React',
      author: 'heshn',
      duration: '2hr',
      fees: 100,
      image: '../../assets/download1.png',
    },
    {
      title: 'React',
      author: 'heshn',
      duration: '2hr',
      fees: 100,
      image: '../../assets/download1.png',
    }
  ];

  constructor(
    private coursesStore: CoursesStore,
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    this.beginnerCourses$ = this.coursesStore.filterByCategory('BEGINNER');

    this.advancedCourses$ = this.coursesStore.filterByCategory('ADVANCED');
  }

  /*
  getA(){
   this.coursesStore.getAllBeginner().subscribe((res:any)=>{
      console.log(res);
      this.courseA=res;
    })*/
  }

