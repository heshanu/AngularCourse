import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStore } from '../services/auth.store';
import { CoursesStore } from '../services/courses.store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private c: CoursesStore
  ) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  register() {
    const val = this.form.value;
    /*
    this.auth.login(val.email, val.password).subscribe(
      () => {
        this.router.navigateByUrl('/courses');
      },
      (err: any) => {
        alert('Login failed!');
      }
    );*/

    this.c.create(val).subscribe((res: any) => {
      console.log(res),
        () => {
          this.router.navigateByUrl('/courses');
        },
        (err: any) => {
          alert('Login failed!');
        };
    });
  }
}
