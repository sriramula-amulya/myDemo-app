import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  log(name){
    console.log("came inside the register component..");
    console.log(name);
  }
  handleFormData(from){
    
  }

}
