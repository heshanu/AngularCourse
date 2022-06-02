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
    //  const val = this.form.value.email;
    this.email = this.form.value.email;
    this.password = this.form.value.password;
    console.log(this.email + this.password);

    this.auth.getAllEmail().subscribe((res: any) => {
      //this.emaildb = res[0];
      //this.password = res[3];
      console.log(res[0].res.id);
    });



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
}
