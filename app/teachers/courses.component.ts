import {Component}  from 'angular2/core';

@Component({
    selector: 'courses',
    template: 
    `
    <ul>
       <li> Math</li>
       <li> Algebra</li>
       <li> Calculus</li>
       <li> Geometry</li>
    </ul>

       <ul>
         <li><a href = '/teachers'>Teachers Home Page</a></li>
       <li><a href = '/students'>Student Achivement Manager</a></li>
       </ul>
    `
})
export class CoursesComponent {

}