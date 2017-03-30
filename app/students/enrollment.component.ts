import {Component}  from 'angular2/core';

@Component({
    selector: 'enrollment',
    template: 
    `
    <ul>
       <li>Enrollment Item 1</li>
       <li>Enrollment Item 2</li>

       <a href='/students'> Back to Students Home</a>
    </ul>
    `
})
export class EnrollmentComponent {

}