import {Component}  from 'angular2/core';

@Component({
    selector: 'enrollment',
    template: 
    `
    <ul>
       <li>Enrollment Item 1</li>
       <li>Enrollment Item 2</li>
       <li>Enrollment Item 3</li>
       <li>Enrollment Item 4</li>
  </ul>
       <a href='/students'> View Students</a>
  
    `
})
export class EnrollmentComponent {

}