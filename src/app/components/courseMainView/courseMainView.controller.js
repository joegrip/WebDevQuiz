function CourseMainViewController(handleCourseService,currentCourseService,$scope,$rootScope,$state,$location){
    const $ctrl = this;

    this.$onInit = function(){
        $ctrl.classes = [];
        $ctrl.currentCRN = "";
        handleCourseService.getAllCourses().then(function (result) {
            $ctrl.classes = [];
            var splt = $location.$$path.split('/');
            if(splt.length == 3)
            {
                splt = splt[2];
            }
            else{
                splt = -1;
            }

            //Parse Questions object
            var oneClass;
            for(oneClass of result)
            {
                var newClass = {
                    professor: "Professor "+oneClass.attributes.Professor,
                    location: oneClass.attributes.Location,
                    title: oneClass.attributes.Title,
                    id: oneClass.attributes.CRN,
                }
                $ctrl.classes.push(newClass);
                if(newClass.id == splt)
                {
                    $ctrl.professor = newClass.professor;
                    $ctrl.location = newClass.location;
                    $ctrl.currentCRN = newClass.id;
                    $ctrl.title = newClass.title;

                }
            }
            if(splt == -1)
            {
                $ctrl.professor = $ctrl.classes[0].professor;
                $ctrl.location = $ctrl.classes[0].location;
                $ctrl.currentCRN = $ctrl.classes[0].id;
                $ctrl.title = $ctrl.classes[0].title;
            }



    
            $ctrl.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

            $scope.getCRN = function()
            {
                return $ctrl.currentCRN;
            };
        });

    }

 
    $rootScope.$on('courseClick', function(event, CRN) {
        //$state.go('courseMainView', {'CRN': CRN});
        
        currentCourseService.setCurrentCRN(CRN);
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
                    $ctrl.currentCRN = oneClass.attributes.CRN;
                    $state.go('courseMainView',{'CRN': CRN});
                 
                }
            }

        });
    });
    
    function getCurrentCRN()
    {
        return $ctrl.currentCRN ;
    }

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
