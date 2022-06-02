import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CoursesService } from '../services/courses.service';
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
    private c: CoursesStore,
    private customerservice: CoursesService
  ) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$!: Observable<boolean>;
  selectedId!: string;
  customerForm!: FormGroup;
  customerList: any[] = [];
  submitted: boolean = false;
  isUpdate = false;

  get f() {
    return this.customerForm.controls;
  }

  ngOnInit(): void {
    this.loading$ = this.loading.asObservable();
    this.initForm();
    this.getList();
  }

  initForm(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSaveOrUpdate(): void {
    if (this.customerForm.invalid) {
      alert('Please fill required fields');
      return;
    }
    this.loading.next(true);
    submitted1:"true"
    if (this.isUpdate) {
      //update record
      this.customerservice
        .update(this.customerForm.value, this.selectedId)
        .subscribe((res) => {
          //console.log(res);
          this.getList();
          alert('Record has been updated!');
          this.loading.next(false);
        });
    } else {
      //save records
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
    }
    setTimeout(() => {
      console.log('Response');
      this.submitted = true;
    }, 1000);
  }

  getList() {
    this.customerservice.getAll().subscribe((res) => {
      console.log(res);
      this.customerList = res;
    });
  }

  onUpdate(customer: any): void {
    this.isUpdate = true;
    this.selectedId = customer.id;

    this.customerForm.patchValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phoneNumber: customer.phoneNumber,
      password: customer.password
    });
    console.log(customer);
  }

  onReset(): void {
    this.isUpdate = false;
    this.selectedId = '';
    //this.customerForm.reset();
  }

  onDelete(id: string): void {
    let isConfirm: boolean = confirm('Are u sure to delete this record?');
    if (isConfirm) {
      this.customerservice.delete(id).subscribe((res) => {
        this.getList();
      });
    }
  }
}
