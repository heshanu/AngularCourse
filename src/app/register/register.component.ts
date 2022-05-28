import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStore } from '../services/auth.store';

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
    private auth: AuthStore
  ) {
    this.form = fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;

    this.auth.login(val.email, val.password).subscribe(
      () => {
        this.router.navigateByUrl('/courses');
      },
      (err:any) => {
        alert('Login failed!');
      }
    );
  }
}
