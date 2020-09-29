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
            url: 'questions.json'
        })
    }

}
angular.module('components').service('handleDataService', handleDataService);
