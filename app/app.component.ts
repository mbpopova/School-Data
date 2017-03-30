import {Component} from 'angular2/core';
import {TeachersComponent} from './teachers/teachers.component';
import {StudentsComponent} from './students/students.component';
import{RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@RouteConfig (
[
   
    {
        path: '/students/...', name: 'Students', component: StudentsComponent, useAsDefault: true
    }
,
   {
        path: '/teachers/...', name: 'Teachers', component: TeachersComponent
    }
 
])

@Component({
    selector: 'my-app',
    template: `
    <h1> LOGIN PAGE</h1>
    <form>
     ID: <input type = "text" name = "ID"/>
     PWD: <input type = "text" name = "PWD" placeholder = "Password"/>
    <button><a href = '/login'> LOGIN</a></button>
    </form>

                 <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }


