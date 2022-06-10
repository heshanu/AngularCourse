import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthStore } from '../services/auth.store';
import { CoursesService } from '../services/courses.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email!: '';
  password!: '';
  emaildb!: '';
  passworddb!: '';
  users!: any[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthStore,
    private cou: CoursesService
  ) {
    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.login();
  }

  ngOnInit() {}

  login() {
    this.email = this.form.value.email;
    this.password = this.form.value.password;
    console.log(this.email + this.password);
    if(this.email='test@gmail.com' && this.password='test'){

    }else{

    }

  }

  /*
     this.customerservice.create(this.customerForm.value).subscribe(
        (res) => {
          //after submiting form and clear
          this.customerForm.reset();
          this.getList();
          this.loading.next(false);
        },
        (error) => {
          alert('Error occured when saving data!' + error);
        },
        () => {
          console.log('completed');
        }
      );
    */
}

/*
    this.auth.login(val.email, val.password).subscribe(
      () => {
        this.router.navigateByUrl('/courses');
      },
      (err:any) => {
        alert('Login failed!');
      }
    );*/
