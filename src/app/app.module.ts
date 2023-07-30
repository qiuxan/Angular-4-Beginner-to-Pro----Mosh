import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from 'src/summary.pipe';
import { StarComponent } from './star/star.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { SpecialTitleCasePipe } from 'src/specialtitlecase.pipe';
import { TestingcomponentComponent } from './testingcomponent/testingcomponent.component';
import { TestingButtonComponentComponent } from './testing-button-component/testing-button-component.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NewCourseForm2Component } from './new-course-form2/new-course-form2.component';
import { NewPasswordFormComponent } from './new-password-form/new-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { ArchiveItemComponent } from './archive-item/archive-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    StarComponent,
    TitleCaseComponent,
    SpecialTitleCasePipe,
    TestingcomponentComponent,
    TestingButtonComponentComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    NewCourseForm2Component,
    NewPasswordFormComponent,
    PostsComponent,
    FollowersComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubProfileComponent,
    ArchiveItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id/:username', component: GitHubProfileComponent },
      { path: ':year/:month', component: ArchiveItemComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
