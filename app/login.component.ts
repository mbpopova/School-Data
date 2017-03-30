import {Component} from 'angular2/core';

@Component({
    selector: "login",
    template: 
    `
    <h1>Login Page</h1>
    <a href="/students">Pretend login as a Student</a>
    <a href="/teachers">Pretend login as a Teacher</a>
    `
})
export class LoginComponent {

}