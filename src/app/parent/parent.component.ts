import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  title="Data from Parent";

  handleEventClicked($event){
    console.log('Handled the child event in the parent.....');  
    console.log($event);
  }
  attributes=["Name","Age","Salary"];

  person=[
    {
      name:"Ammu",
      age:21,
      salary:20000
    },
    {
      name:"chinna",
      age:22,
      salary:25000
    },
    {
      name:"harsha",
      age:23,
      salary:20000
    }
  ]
}
