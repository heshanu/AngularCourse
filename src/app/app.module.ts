import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { AboutComponent } from './about/about.component';
import { CommonComponent } from './common/common.component';
import { CourseComponent } from './course/course.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';
import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { SearchLessonsComponent } from './search-lessons/search-lessons.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CommonComponent,
    CourseComponent,
    CourseDialogComponent,
    CourseCardListComponent,
    HomeComponent,
    LessonComponent,
    LoadingComponent,
    LoginComponent,
    MessagesComponent,
    RegisterComponent,
    SearchLessonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
