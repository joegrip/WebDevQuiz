class CourseModel {
    constructor(Parse){
        this.Parse = Parse;
        this.name = 'Course';
    }

    //get all classes
    getAll(){        
        var par = new this.Parse.Object(this.name);
        return new this.Parse.Query(par).find();
        //return query.find();
    }
}

angular
    .module('common')
    .service('CourseModel', CourseModel);