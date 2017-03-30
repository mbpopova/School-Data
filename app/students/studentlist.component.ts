import {Component} from 'angular2/core';


@Component({
    selector: "studentlist",
    template: 
    `
   
    <ul>
      <li><a href = '/teachers'>Teacher Portal</a></li>
      <li><a href = '/students/enrollments'>Student Enrollments</a></li>
    </ul>
       `
  })

export class StudentlistComponent {

}