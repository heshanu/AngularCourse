import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll,
  shareReplay,
} from 'rxjs/operators';
import { merge, fromEvent, Observable, concat } from 'rxjs';
import { Lesson } from '../model/lesson';
import { CoursesService } from '../services/courses.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-search-lessons',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLessonsComponent implements OnInit {
  //searchResults!: any[];
  searchValue: string = '';
  form!: FormGroup;
  activeLesson!: any[];

  courseB: any = [
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
    },
  ];

  constructor(private coursesService: CoursesService, private fb: FormBuilder) {
    this.form = fb.group({
      search: '',
    });
  }
  searchText: any;
  arr!:Lesson[];
  ngOnInit() {}
  flag: boolean = false;
  i!: any[];
  Search() {
    //this.search = this.form.value.search;
    //console.log(this.search);
    // for (const key in this.courseA) {
    //   if (this.courseA.find((x) => x.title== this.search)) {
    //     this.flag = true;
    //   }
    if (this.searchText !== '') {
      this.arr = this.arr.filter((res) => {
        return res['searchText'].toLocalelowerCase().match(this.searchText);
      });
    } else {
      alert('Please enter values');
    }
  }
}
