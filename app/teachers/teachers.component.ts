import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import{RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TeacherlistComponent} from './teacherlist.component';

@RouteConfig (
[    
  
   {
        path: '/', name: 'TeacherList', component: TeacherlistComponent
    },
        ,
    {
        path: '/courses', name: 'Courses', component: CoursesComponent
    }

])

@Component({
    selector: "teachers",
    template: 
    `
      <h1>Teacher Portal</h1>
      <a href="/login">Logout</a><br/>
      <a href = '/students'>Student Achivement Manager</a>
      <router-outlet></router-outlet>
      
      `
 ,  
   
   directives: [ROUTER_DIRECTIVES]
  })

export class TeachersComponent {

}