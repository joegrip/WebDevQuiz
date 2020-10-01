class ResultModel {
    constructor(Parse){
        this.Parse = Parse;
        this.name = "Results";
    }

    getAll(){
        var par = Parse.Object.extend(this.name);
        const query = new Parse.Query(par);
        return query.find();
    }
}

angular
    .module('common')
    .service('ResultModel', ResultModel);



