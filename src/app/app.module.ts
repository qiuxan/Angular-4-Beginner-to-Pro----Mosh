import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from 'src/summary.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    StarComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
