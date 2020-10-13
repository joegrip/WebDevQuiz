function CourseMainViewController(handleCourseService,$scope,$rootScope){
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
                    location: oneClass.attributes.Location,
                    title: oneClass.attributes.Title,
                }
                $ctrl.classes.push(newClass);
            }
            $ctrl.professor = $ctrl.classes[0].professor;
            $ctrl.location = $ctrl.classes[0].location;

            $ctrl.title = $ctrl.classes[0].title;
    
            $ctrl.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });

    }


    $rootScope.$on('courseClick', function(event, CRN) {

        const promise = handleCourseService.getAllCourses(); 
        promise.then(function (result){
            var oneClass;
            for(oneClass of result)
            {
                if(oneClass.attributes.CRN == CRN)
                {
                    $ctrl.professor = "Professor "+oneClass.attributes.Professor;
                    $ctrl.location = oneClass.attributes.Location;
                    $ctrl.title = oneClass.attributes.Title;
                 
                }
            }

        });
    });
    
 

    handleCourseService.getAllCourses().then(function (result) {
        $ctrl.classes = [];
        //Parse Questions object
        var oneClass;
        for(oneClass of result)
        {
            var newClass = {
                professor: "Professor "+oneClass.attributes.Professor,
                location: oneClass.attributes.Location,
                title: oneClass.attributes.Title,
            }
            $ctrl.classes.push(newClass);
        }
        $ctrl.professor = $ctrl.classes[0].professor;
        $ctrl.location = $ctrl.classes[0].location;

        $ctrl.title = $ctrl.classes[0].title;

        $ctrl.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    });


}   

angular
    .module('components.courseMainView')
    .controller('CourseMainViewController', CourseMainViewController);
