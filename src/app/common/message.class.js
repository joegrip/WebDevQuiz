class MessageModel {
    constructor(Parse){
        this.Parse = Parse;
        this.name = "Message";
    }


    //Get all messages
    getMsg(id){
        var par = Parse.Object.extend(this.name);
        const query = new Parse.Query(par);
        return query.find();
    }
}

angular
    .module('common')
    .service('MessageModel', MessageModel);