
function ResultController($scope, $rootScope, handleAnswersService, handleResultService,ResultModel,Parse){
    const $ctrl = this;

    this.$onInit = function(){
    $ctrl.show = 0;
    };


    $rootScope.$on("qDone", function (evt, arg) {
        $ctrl.answers = handleAnswersService.getAnswers();
        $ctrl.show = 1;
        $ctrl.result = "You answered " + $ctrl.answers[0].toString();
        $ctrl.score = 1;
        //Add up all the elements of the user answer arary
        $ctrl.answers.forEach(function(oneElem){
            $ctrl.score += oneElem;
        });
    
        //Get the data that corresponds to the user's score
        
        handleResultService.getResultOptions().then(function (result){
            var i;
            for (i = 0; i < result.length; i++) {
                if(result[i].attributes["resNum"] == $ctrl.score)
                {
                    $ctrl.resultMessage = result[i].attributes["message"]
                }
            }

        });
        
    });
    
}
angular
    .module('components.result')
    .controller('ResultController', ResultController);