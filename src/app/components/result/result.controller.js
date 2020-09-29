
function ResultController($scope, $rootScope, handleAnswersService, handleResultService) {

    const $ctrl = this;
    $ctrl.show = 0;


    $rootScope.$on("qDone", function (evt, arg) {
        $ctrl.answers = handleAnswersService.getAnswers();
        $ctrl.show = 1;
        $ctrl.result = "You answered " + $ctrl.answers[0].toString();
        $ctrl.score = 0;
        //Add up all the elements of the user answer arary
        $ctrl.answers.forEach(function(oneElem){
            $ctrl.score += oneElem;
        });
    
        //Get the data that corresponds to the user's score
        handleResultService.getResultOptions().then(function (result){
            $ctrl.resultMessage = result.data[$ctrl.score].message;
            $ctrl.resultIMG = result.data[$ctrl.score].img;
        });
        
    });
    
}
angular.module('components.result').controller('ResultController', ResultController);