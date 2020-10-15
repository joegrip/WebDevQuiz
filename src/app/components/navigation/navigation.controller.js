function NavigationController(handleCourseService,$scope,$rootScope){
    const $ctrl = this;
    $ctrl.updateCourse = updateCourse;

    function updateCourse(CRN) {
        //on click tell the courseMainView controller to load new class
        $rootScope.$emit('courseClick', CRN);
        }
    this.$onInit = function(){
        $ctrl.classes = [];
        //Load in classes and then 
        handleCourseService.getAllCourses().then(function (result) {
            $ctrl.classes = [];
            //Parse Questions object
            var oneClass;
            for(oneClass of result)
            {
                var newClass = {
                    id: oneClass.attributes.CRN,
                    title: oneClass.attributes.Title,
                }
                //Add to classes array  
                $ctrl.classes.push(newClass);
            }
        });

    };

}

angular
    .module('components.navigation')
    .controller('NavigationController', NavigationController);