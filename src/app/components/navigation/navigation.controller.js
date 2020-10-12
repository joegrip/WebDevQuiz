function NavigationController(handleCourseService,$scope,$rootScope){
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
                    id: oneClass.attributes.CRN,
                    title: oneClass.attributes.Title,
                }
                $ctrl.classes.push(newClass);
            }
        });
    };

}

angular
    .module('components.navigation')
    .controller('NavigationController', NavigationController);