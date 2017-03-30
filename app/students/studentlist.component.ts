import {Component} from 'angular2/core';


@Component({
    selector: "studentlist",
    template: 
    `
     <ul>
        <li>Student 1   <a href = '/students/enrollments'> View Enrollments</a></li>
        <li>Student 2   <a href = '/students/enrollments'> View Enrollments</a></li>
        <li>Student 3   <a href = '/students/enrollments'> View Enrollments</a></li>
        <li>Student 4   <a href = '/students/enrollments'> View Enrollments</a></li>
     </ul>
    
       `
  })

export class StudentlistComponent {

}