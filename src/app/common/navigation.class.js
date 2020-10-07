class ClassModel {
    constructor(Parse){
        this.Parse = Parse;
        this.name = "Classes";
    }


    //get all questions
    getAll(){
        var par = Parse.Object.extend(this.name);
        const query = new Parse.Query(par);
        return query.find();
    }
}

angular
    .module('common')
    .service('ClassModel', ClassModel);