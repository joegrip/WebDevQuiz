class QuestionModel {
    constructor(Parse){
        this.Parse = Parse;
        this.name = "Questions";
    }


    getAll(){
        var par = Parse.Object.extend(this.name);
        const query = new Parse.Query(par);
        return query.find();
    }
}

angular
    .module('common')
    .service('QuestionModel', QuestionModel);