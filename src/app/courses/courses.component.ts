import { Component, OnInit} from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private courses:any[];
  constructor(private courseService:CourseService) {

   }
   ngOnInit():void {
    this.courses=this.courseService.getAllCourses();
   }

   deleteCourseHandler(id){
    // this.courses=this.courseService.deleteById(id);
    console.log(id);
    this.courses=this.courseService.deleteById(id);
   }
 
  

}
