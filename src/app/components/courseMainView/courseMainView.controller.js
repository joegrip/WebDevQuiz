function CourseMainViewController(handleCourseService,currentCourseService,$scope,$rootScope,$state,$location){
    const $ctrl = this;

    this.$onInit = function(){
        //initialize variable to read data into
        $ctrl.classes = [];
        $ctrl.currentCRN = "";
        $ctrl.currentSubPage = 'welcome';
     

        //get all course data
        handleCourseService.getAllCourses().then(function (result) {
            $ctrl.classes = [];
            
            //read CRN from URL if avaliable
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
            //iterate through and read in each object
            for(oneClass of result)
            {
                var newClass = {
                    professor: "Professor "+oneClass.attributes.Professor,
                    location: oneClass.attributes.Location,
                    title: oneClass.attributes.Title,
                    id: oneClass.attributes.CRN,
                }

                //add object to list
                $ctrl.classes.push(newClass);

                //check if this is the class to load 
                if(newClass.id == splt)
                {
                    $ctrl.professor = newClass.professor;
                    $ctrl.location = newClass.location;
                    $ctrl.currentCRN = newClass.id;
                    $ctrl.title = newClass.title;

                }
            }

            //if URL param not given then default to first class
            if(splt == -1)
            {
                $ctrl.professor = $ctrl.classes[0].professor;
                $ctrl.location = $ctrl.classes[0].location;
                $ctrl.currentCRN = $ctrl.classes[0].id;
                $ctrl.title = $ctrl.classes[0].title;
            }



    
            $ctrl.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            //get current CRN
            $scope.getCRN = function()
            {
                return $ctrl.currentCRN;
            };

        });

    }

 
    $rootScope.$on('courseClick', function(event, CRN) {
        //if user clicked the navigation bar        
        currentCourseService.setCurrentCRN(CRN);

        const promise = handleCourseService.getAllCourses(); //get all user courses
        promise.then(function (result){
            var oneClass;
            //iterate through result and load in data
            for(oneClass of result)
            {
                if(oneClass.attributes.CRN == CRN)
                {
                    $ctrl.professor = "Professor "+oneClass.attributes.Professor;
                    $ctrl.location = oneClass.attributes.Location;
                    $ctrl.title = oneClass.attributes.Title;
                    $ctrl.currentCRN = oneClass.attributes.CRN;
                    $state.go('courseMainView',{'CRN': CRN, 'subpage':'welcome'});
                 
                }
            }

        });
    });
    

    $rootScope.$on('resourceClick', function(event, state){
        currentCourseService.setSubPage(state);
        console.log("subpage: "+ state);
        $state.go('courseMainView', {'subpage':state});
    });


}   

angular
    .module('components.courseMainView')
    .controller('CourseMainViewController', CourseMainViewController);
