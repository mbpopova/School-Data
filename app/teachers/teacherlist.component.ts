import {Component} from 'angular2/core';


@Component({
    selector: "teacher-list",
    template: 
    `
    <ul>
        <li>Teacher 1</li>
        <li>Teacher 2</li>
    </ul>

      <ul>
         <li><a href = '/students'>Student Achivement Manager</a></li>
         <li><a href = '/teachers/courses'>Teacher Courses</a></li>
      </ul>


       `
  })

export class TeacherlistComponent {

}