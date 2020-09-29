function HomeController(handleDataService,handleAnswersService,$scope){
    const $ctrl = this;
	$ctrl.hide = 0; //Controls quiz area visibility
    $ctrl.done = 0; //Determines if the submit button is visible
    $ctrl.prev = 0; //Controls the visibility of the previous button
    $ctrl.currentQuestion = 1; //Counter to control flow of previous button
    $scope.d = {
        singleSelect: null,
        q: [0, 0, 0],
        showS: [1, 0, 0] //question visibility
    };
    handleDataService.getQuestions().then(function (result) {
        console.log(result);
        $ctrl.questions = result.data.questions; //Use the handle service to obtain the list of questions

    });
    
    $ctrl.record = function (qID) {
        $scope.d.q[parseInt(qID, 10)] = $ctrl.questions[parseInt(qID, 10)].answers.indexOf($scope.d.singleSelect); //Record the user's answer in the q array
        if (parseInt(qID, 10) < 2) { //Restrict the question array from growing past questions
            $scope.d.showS[parseInt(qID, 10) + 1] = 1; //Make next question visible
            $scope.d.showS[parseInt(qID, 10)] = 0; //Make previous question hidden
        } else {
            $scope.d.showS[parseInt(qID, 10)] = 0; //Make previous question hidden
            $ctrl.done = 1; //The user has gone through all questions. Make submit button permanently visible
        }
        
        $ctrl.currentQuestion += 1; //Move the flow counter forward
        //Determine if the previous button should be visible. Mainly restricts the first question from having a previous button
        $ctrl.prev = (parseInt(qID, 10) >= 0) ? 1 : 0;
        $scope.d.singleSelect = 5; //Reset the singleSelect to a dead value

    };


    $ctrl.submit = function () {
        handleAnswersService.setDone(); 
        handleAnswersService.setAnswers($scope.d.q);
        $ctrl.done = 0;
        $ctrl.hide = 1;
        $rootScope.$emit("qDone", "");


    };
    
    $ctrl.previous = function(){
        //Only set the current element to 0 if it's within the length of the showS array
        if($ctrl.currentQuestion < 4) $scope.d.showS[$ctrl.currentQuestion - 1] = 0;
        $scope.d.showS[$ctrl.currentQuestion - 2] = 1; //Make the previous question visible
        $ctrl.currentQuestion -= 1; //Adjust the flow counter
        $ctrl.prev = ($ctrl.currentQuestion > 1) ? 1 : 0; //Determine if the previous button should be visible.
    };

    $ctrl.getPrev = function (){
        return $ctrl.prev;
    };
    
    $ctrl.getDone = function () {
        return $ctrl.done;
    };
    $ctrl.showSelect = function (qID) {
        return $scope.d.showS[parseInt(qID, 10)];
    };
}

angular.module('components.home').controller('HomeController', HomeController);