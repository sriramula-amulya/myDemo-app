import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {

  constructor() { }

  @Input("everyCourse") cour;
  @Output("del") delete= new EventEmitter();

  register(cour){
  
    cour.participants+=1;
    console.log(cour.participants);
    console.log(`came inside function`);
  } 

  deleteCourse(obj){
    console.log(obj);
    this.delete.emit(obj.id);
  }


}
