
function ResultController($scope, $rootScope, handleAnswersService, handleResultService) {
    const $ctrl = this;

    this.$onInit = function(){
    $ctrl.show = 0;
    $ctrl.results = {
        "0" : {
                "message" : "Bad! (Result 0)",
                "img" : "images/0.jpg"
              },
        "1" : {
                "message" : "Bad! (Result 1)",
                "img" : "images/1.jpg"
              },
        "2" : {
                "message" : "Bad! (Result 2)",
                "img" : "images/2.jpg"
              },
        "3" : {
                "message" : "Bad! (Result 3)",
                "img" : "images/3.jpg"
              },
        "4" : {
                "message" : "Bad! (Result 4)",
                "img" : "images/4.jpg"
              },
        "5" : {
                "message" : "Bad! (Result 5)",
                "img" : "images/5.jpg"
              },
        "6" : {
                "message" : "Good! (Result 6)",
                "img" : "images/6.jpg"
              },
        "7" : {
                "message" : "Bad!! (Result 7)",
                "img" : "images/7.jpg"
              },
        "8" : {
                "message" : "Bad! (Result 8)",
                "img" : "images/8.jpg"
              },
        "9" : {
                "message" : "Bad! (Result 9)",
                "img" : "images/9.jpg"
              }
    };
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
        /*
        handleResultService.getResultOptions().then(function (result){
            $ctrl.resultMessage = result.data[$ctrl.score].message;
            $ctrl.resultIMG = result.data[$ctrl.score].img;
        });
        */
    
    $ctrl.resultMessage = $ctrl.results[$ctrl.score].message;
    //$ctrl.resultIMG = $ctrl.results[$ctrl.score].img;
    console.log($ctrl.show);
    });
    
}
angular.module('components.result').controller('ResultController', ResultController);