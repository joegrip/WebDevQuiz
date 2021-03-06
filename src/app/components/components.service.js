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

function handleResultService(ResultModel,MessageModel){
    
    this.getResultOptions = getResultOptions;
    this.getMsg = getMsg;

    function getResultOptions(){
        return ResultModel.getAll();
    }
    function getMsg(id){
        return MessageModel.getMsg(id);
    }
    
}
angular.module('components').service('handleResultService', handleResultService);

function handleQuestionService(QuestionModel){
    this.getAllQuestions = getAllQuestions;

    function getAllQuestions(){
        return QuestionModel.getAll();
    }

  
}

angular.module('components').service('handleQuestionService', handleQuestionService);




function handleCourseService(CourseModel){
    this.getAllCourses= getAllCourses;

    function getAllCourses(){
        return CourseModel.getAll();
    }

    function getSubpage(){

    }

  
}

angular.module('components').service('handleCourseService', handleCourseService);


function currentCourseService(){
    this.getCurrentCRN = getCurrentCRN;
    this.setCurrentCRN = setCurrentCRN;
    this.getSubPage = getSubPage;
    this.setSubPage = setSubPage;
    this.currentCRN = "30023";
    this.currentSubPage = "";

    function getCurrentCRN(){
        return this.currentCRN;
    }
    function setCurrentCRN(updated){
        this.currentCRN = updated;
    }

    function getSubPage(){
        return this.currentSubPage;
    }

    function setSubPage(state){
        this.currentSubPage = state;
    }


  
}

angular.module('components').service('currentCourseService', currentCourseService);