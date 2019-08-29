import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLikeComponent } from './app-like/app-like.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NameFormatterPipe } from './name-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppLikeComponent,
    CoursesComponent,
    CourseComponent,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    RegisterComponent,
    NameFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:CoursesComponent
      },
      {
        path:'parent',
        component:ParentComponent
      },
      {
        path:'one',
        component:OneComponent
      },
      {
        path:'two',
        component:TwoComponent
      },
      {
        path:'three',
        component:ThreeComponent
      },
      {
        path:'register',
        component:RegisterComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
