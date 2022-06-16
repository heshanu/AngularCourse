import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { CoursesStore } from '../services/courses.store';
import { AlertsComponent } from '../shared/alerts/alerts.component';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
 
  form!: FormGroup;
  submitted1: any;
  isSuccess!: boolean;




  constructor(
    private fb: FormBuilder,
    private router: Router,
    private c: CoursesStore,
    private customerservice: CoursesService
  ) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$!: Observable<boolean>;
  selectedId!: string;
  customerForm!: FormGroup;
  customerList: any[] = [];
  submitted: boolean = false;
  isUpdate = false;

  feedbacK: any[] = [
    {
      name: 'Heshan',
      ration: 'good work',
      star: 5,
    },
    {
      name: 'Heshan',
      ration: 'good work',
      star: 5,
    },
    {
      name: 'Heshan',
      ration: 'good work',
      star: 5,
    },
  ];
  get f() {
    return this.customerForm.controls;
  }

  ngOnInit(): void {
    this.loading$ = this.loading.asObservable();
    this.initForm();
  }

  initForm(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  onSaveOrUpdate(): void {
    if (this.customerForm.invalid) {
      alert('Please fill required fields');
      return;
    }
    this.loading.next(true);
    if (this.isUpdate) {
      this.isSuccess = true;
      //update record
      // this.customerservice
      //   .update(this.customerForm.value, this.selectedId)
      //   .subscribe((res) => {
      //     console.log('Sucessfully inserted');
      //     this.getList();
      //     alert('Record has been updated!');
      //     this.loading.next(false);
    } else {
      this.isSuccess = false;
      //save records
      // this.customerservice.create(this.customerForm.value).subscribe(
      //   (res) => {
      //     //after submiting form and clear
      //     this.customerForm.reset();
      //     this.getList();
      //     this.loading.next(false);
      //   },
      //   (error) => {
      //     alert('Error occured when saving data!' + error);
      //   },
      //   () => {
      //     console.log('completed');
      //   }
      // );
    }
    setTimeout(() => {
      console.log('Response');
      isSuccess: true;
      alert('suceefully added!');
      this.submitted = true;
    }, 1000);
  }

  onReset(): void {
    this.isUpdate = false;
    this.selectedId = '';
    //this.customerForm.reset();
  }
}
