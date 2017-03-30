import {Component} from 'angular2/core';


@Component({
    selector: "teacher-list",
    template: 
    `
    <ul>
        <li>Teacher 1<a href = '/teachers/courses'> View Courses</a></li>
        <li>Teacher 2<a href = '/teachers/courses'> View Courses</a></li>
        <li>Teacher 3<a href = '/teachers/courses'> View Courses</a></li>
        <li>Teacher 4<a href = '/teachers/courses'> View Courses</a></li>
    </ul>

       `
  })

export class TeacherlistComponent {

}