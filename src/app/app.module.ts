import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
//import { AboutComponent } from './about/about.component';
//import { AboutComponent } from './about/about.component';
//import { CommonComponent } from './common/common.component';
//import { CourseComponent } from './course/course.component';
//import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';
//import { HomeComponent } from './home/home.component';
//import { LessonComponent } from './lesson/lesson.component';
//import { LoadingComponent } from './loading/loading.component';
//import { LoginComponent } from './login/login.component';
//import { MessagesComponent } from './messages/messages.component';
//import { RegisterComponent } from './register/register.component';
///import { SearchLessonsComponent } from './search-lessons/search-lessons.component';
//import { SafeUrlPipe } from './common/safe-url.pipe';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CourseComponent } from './course/course.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatMomentDateModule } from '@angular/material-moment-adapter';
//import { MatMomentDateModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { LessonComponent } from './lesson/lesson.component';
import { SafeUrlPipe } from './common/safe-url.pipe';
import { MessagesComponent } from './messages/messages.component';
import { SearchLessonsComponent } from './search-lessons/search-lessons.component';
import { LoadingComponent } from './loading/loading.component';
//import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
//import { CourseCardListComponent } from './course-card-list/course-card-list.component';
import { LoadingService } from './loading/loading.service';
import { RegisterComponent } from './register/register.component';
//import {MatCardModule} from '@angular/material/card';
import { MessagesService } from './messages/message.service';
import { TitleComponent } from './shared/title/title.component';
//import {CourseCardListComponent} './course-card-list/course-card-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CourseCardListComponent,
    CourseDialogComponent,
    LoginComponent,
    LessonComponent,
    SafeUrlPipe,
    MessagesComponent,
    SearchLessonsComponent,
    LoadingComponent,
    RegisterComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [LoadingService,MessagesService],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent],
})
export class AppModule {}
