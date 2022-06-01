import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthStore } from '../services/auth.store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthStore
  ) {
    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;
/*
    this.auth.login(val.email, val.password).subscribe(
      () => {
        this.router.navigateByUrl('/courses');
      },
      (err:any) => {
        alert('Login failed!');
      }
    );*/
  }
}
