function NavigationController(handleClassService,$scope,$rootScope){
    const $ctrl = this;

    this.$onInit = function(){
        $ctrl.classes = [];
        handleClassService.getAllClasses().then(function (result) {
            $ctrl.classes = [];
            //Parse Questions object
            var oneClass;
            for(oneClass of result)
            {
                var newClass = {
                    id: oneClass.attributes.idNum,
                    name: oneClass.attributes.name,
                    link: oneClass.attributes.link
                }
                $ctrl.classes.push(newClass);
            }
        });
    };

}

angular
    .module('components.navigation')
    .controller('NavigationController', NavigationController);