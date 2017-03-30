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
<a href = '/teachers'>View Teachers</a>

    `
})
export class CoursesComponent {

}