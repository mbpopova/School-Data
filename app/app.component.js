System.register(['angular2/core', './teachers/teachers.component', './students/students.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, teachers_component_1, students_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (teachers_component_1_1) {
                teachers_component_1 = teachers_component_1_1;
            },
            function (students_component_1_1) {
                students_component_1 = students_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/students/...', name: 'Students', component: students_component_1.StudentsComponent, useAsDefault: true
                        },
                        {
                            path: '/teachers/...', name: 'Teachers', component: teachers_component_1.TeachersComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1> LOGIN PAGE</h1>\n    <form>\n     ID: <input type = \"text\" name = \"ID\"/>\n     PWD: <input type = \"text\" name = \"PWD\" placeholder = \"Password\"/>\n    <button><a href = '/login'> LOGIN</a></button>\n    </form>\n\n                 <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map