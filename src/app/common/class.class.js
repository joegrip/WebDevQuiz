class ClassModel {
    constructor(Parse){
        this.Parse = Parse;
        this.name = "Classes";
    }

    //get all classes
    getAll(){
        console.log("Log in Class Model");
        var par = Parse.Object.extend(this.name);
        const query = new Parse.Query(par);

        return Promise.resolve(["hello","hello2"]);
        return query.find();
    }
}

angular
    .module('common')
    .service('ClassModel', ClassModel);