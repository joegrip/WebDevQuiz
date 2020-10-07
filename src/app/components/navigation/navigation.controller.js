function NavigationController(handleClassService,$scope,$rootScope){
    const $ctrl = this;

    this.$onInit = function(){
 
    };

    handleClassService.getAllClasses().then(function (result) {
        $ctrl.classes = [];

        console.log("Result in Nav controller :",result);
        //Parse Questions object
        var oneClass;
        for(oneClass of result)
        {
            var newClass = {
                id: oneClass.attributes.idNum,
                name: oneClass.attributes.name,
                link: oneClass.attributes.link
            }
            $ctrl.questions.push(newClass);
        }
    });

}

angular
    .module('components.navigation')
    .controller('NavigationController', NavigationController);