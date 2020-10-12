function CourseMainViewController(handleCourseService){
    const $ctrl = this;

    this.$onInit = function(){
        $ctrl.classes = [];
        handleCourseService.getAllCourses().then(function (result) {
            $ctrl.classes = [];
            //Parse Questions object
            var oneClass;
            for(oneClass of result)
            {

                var newClass = {
                    professor: "Professor "+oneClass.attributes.Professor,
                    title: oneClass.attributes.Title,
                }
                $ctrl.classes.push(newClass);
            }
            console.log($ctrl.classes[0]);
            $ctrl.professor = $ctrl.classes[0].professor;
            $ctrl.title = $ctrl.classes[0].title;
    
            $ctrl.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });

    }
}   

angular
    .module('components.courseMainView')
    .controller('CourseMainViewController', CourseMainViewController);
