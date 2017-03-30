System.register(['angular2/core', './enrollment.component', 'angular2/router', './studentlist.component'], function(exports_1, context_1) {
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
    var core_1, enrollment_component_1, router_1, studentlist_component_1;
    var StudentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (enrollment_component_1_1) {
                enrollment_component_1 = enrollment_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (studentlist_component_1_1) {
                studentlist_component_1 = studentlist_component_1_1;
            }],
        execute: function() {
            StudentsComponent = (function () {
                function StudentsComponent() {
                }
                StudentsComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/', name: 'StudentsList', component: studentlist_component_1.StudentlistComponent, useAsDefault: true
                        },
                        {
                            path: '/enrollments', name: 'Enrollments', component: enrollment_component_1.EnrollmentComponent
                        }
                    ]),
                    core_1.Component({
                        selector: "students",
                        template: "\n    <h1>Student Achievement Manager</h1>\n\n <ul>\n     <li>Student 1</li>\n     <li>Student 2</li>\n     </ul>\n\n     \n    <router-outlet></router-outlet>\n   ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StudentsComponent);
                return StudentsComponent;
            }());
            exports_1("StudentsComponent", StudentsComponent);
        }
    }
});
//# sourceMappingURL=students.component.js.map