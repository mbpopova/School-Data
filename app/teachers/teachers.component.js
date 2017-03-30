System.register(['angular2/core', './courses.component', 'angular2/router', './teacherlist.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, router_1, teacherlist_component_1;
    var TeachersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (teacherlist_component_1_1) {
                teacherlist_component_1 = teacherlist_component_1_1;
            }],
        execute: function() {
            TeachersComponent = (function () {
                function TeachersComponent() {
                }
                TeachersComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/', name: 'TeacherList', component: teacherlist_component_1.TeacherlistComponent
                        },
                        ,
                        {
                            path: '/courses', name: 'Courses', component: courses_component_1.CoursesComponent
                        }
                    ]),
                    core_1.Component({
                        selector: "teachers",
                        template: "\n      <h1>Teacher Portal</h1>\n      <router-outlet></router-outlet>\n      ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TeachersComponent);
                return TeachersComponent;
            }());
            exports_1("TeachersComponent", TeachersComponent);
        }
    }
});
//# sourceMappingURL=teachers.component.js.map