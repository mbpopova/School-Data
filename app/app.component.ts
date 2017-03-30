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
    template: 
    `<div class="jumbotron">
                 <router-outlet></router-outlet>
                 </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }


