System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TeacherlistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TeacherlistComponent = (function () {
                function TeacherlistComponent() {
                }
                TeacherlistComponent = __decorate([
                    core_1.Component({
                        selector: "teacher-list",
                        template: "\n    <ul>\n        <li>Teacher 1</li>\n        <li>Teacher 2</li>\n    </ul>\n\n      <ul>\n         <li><a href = '/students'>Student Achivement Manager</a></li>\n         <li><a href = '/teachers/courses'>Teacher Courses</a></li>\n      </ul>\n\n\n       "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TeacherlistComponent);
                return TeacherlistComponent;
            }());
            exports_1("TeacherlistComponent", TeacherlistComponent);
        }
    }
});
//# sourceMappingURL=teacherlist.component.js.map