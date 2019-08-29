import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  coursename='';
  courses=[
    {
      name:"Maven",
      id:1,
      price:1000,
      offer:true,
      imgUrl:'../assets/angular.png',
      participants:0,
      rating:4.2421,
      launchDate:new Date(2019,5,21),
      instructor:
      {
        firstname:"pavan",
        lastname:"j",
        gender:"male"
      }
    },
   {
     name:"Java8",
     id:2,
     price:2000,
      offer:false,
     imgUrl:'../assets/angular.png',
      participants:0,
      rating:4.46357,
      launchDate:new Date(2019,4,21),
      instructor:  {
        firstname:"harsha",
        lastname:"k",
        gender:"male"
      }
    },
   {
     name:"Spring Boot",
     id:3,
     price:3000,
      offer:true,
     imgUrl:'../assets/angular.png',
participants:0,
rating:4.91238,
launchDate:new Date(2019,5,24),
instructor:  {
  firstname:"chinna",
  lastname:"m",
  gender:"male"
}
    },
    {
      name:"Hibernate",
      id:4,
      price:4000,
      offer:false,
      imgUrl:'../assets/angular.png',
participants:0,
rating:3.135156,
launchDate:new Date(2019,2,11),
instructor:  {
  firstname:"ammu",
  lastname:"s",
  gender:"female"
}
    },
    {
      name:"JPA",
      id:5,
      price:2000,
      offer:true, 
      imgUrl:'../assets/angular.png',
      participants:0,
      rating:4.46527,
      launchDate:new Date(2019,5,10),
 
    }
  
  ];


onChange(){
console.log(`entered into change function`);
 
    this.courses=this.courses.filter((course)=>course.name.toLowerCase().startsWith(this.coursename.toLowerCase()));
}

getAllCourses():any[]{
  return this.courses;
}

deleteById(id:number):any[]{
  // return this.courses.filter(course => course.id !== id);
 return this.courses.splice(id,1);
}

}
