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
users:any[]=[{
  username:'heshanu97',
  status:"inactive",
  lastSeen:'20 minutes ago'
},
{
  username:'chethiya',
  status:"inactive",
  lastSeen:'10 minutes ago'
},
{
  username:'Lakshan',
  status:"inactive",
  lastSeen:'10 minutes ago'
}
];
  ngOnInit(): void {

  }






}
