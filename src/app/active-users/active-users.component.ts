import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private cou:CoursesService,private http:HttpClient) { }
users:any[]=[];
  ngOnInit(): void {

  }

  




}
