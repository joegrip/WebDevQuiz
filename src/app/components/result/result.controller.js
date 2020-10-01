
function ResultController($scope, $rootScope, handleAnswersService, handleResultService,Parse){
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
            var found = -1;
            for (i = 0; i < result.length; i++) {
                if(result[i].attributes["resNum"] == $ctrl.score)
                {
                    found = i;
                }
            }
            //Get the Pointer from the Results Parse Object then use that to find the correct message
            handleResultService.getMsg(result[found].attributes["text"].id).then(function (res){
                var j;
                var found2 = -1;
                for (j = 0; j < res.length; j++) {
                    if(result[found].attributes["text"].id== res[j].id)
                    {
                        found2 = j;
                    }
                }
                //Set message to combination of message and score
                $ctrl.resultMessage = res[found2].attributes["msg"] + "("+$ctrl.score+")";

            });
 

        });
        
    });
    
}
angular
    .module('components.result')
    .controller('ResultController', ResultController);