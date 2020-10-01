function handleDataService($http) {

    this.getQuestions = getQuestions;
    this.getSubmitted = getSubmitted;
    this.wasSubmitted = wasSubmitted;
    this.submitted = 0;

    function getSubmitted() {
        return this.submitted;
    }

    function wasSubmitted() {
        this.submitted = 1;
    }
    //Get the questions from the JSON
    function getQuestions() {
        return $http({
            method: 'GET',
            url: './../../questions.json'
        })
    }

}
angular.module('components').service('handleDataService', handleDataService);



function handleAnswersService() {

    this.getAnswers = getAnswers;
    this.setAnswers = setAnswers;
    this.getDone = getDone;
    this.setDone = setDone;
    this.answers = [0, 0, 0];
    this.done = 0;

    function getAnswers() {
        return this.answers;
    }

    function setAnswers(ans) {
        this.answers = ans;
    }

    function getDone() {
        return this.done;
    }

    function setDone() {
        this.done = 1;
    }


}
angular.module('components').service('handleAnswersService', handleAnswersService);

function handleResultService($http){
    
    this.getResultOptions = getResultOptions;
    
    function getResultOptions(){
        var ResultModel = Parse.Object.extend("Results");
  
         const query = new Parse.Query(ResultModel);
        return query.find();
    }
    
}
angular.module('components').service('handleResultService', handleResultService);

function handleQuestionService($http){
    this.getAllQuestions = getAllQuestions;

    function getAllQuestions(){
        var QuestionModel = Parse.Object.extend("Questions");
        const query = new Parse.Query(QuestionModel);
        return query.find();
    }
}

angular.module('components').service('handleQuestionService', handleQuestionService);