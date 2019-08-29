import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormatter'
})
export class NameFormatterPipe implements PipeTransform {

  transform(value: {firstname:string, lastname:string,gender:string}, args?: any): any {

    console.log('value printed inside the pipe');
    console.log(args);
    return value.gender === 'male' ? `Mr. ${value.lastname} . ${value.firstname}`:`Mrs. ${value.lastname} . ${value.firstname}`;
  }

}
