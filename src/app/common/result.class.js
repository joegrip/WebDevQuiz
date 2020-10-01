class ResultModel {
    constructor(Parse){
        this.Parse = Parse;
        this.name = "Results";
    }
/*
        this.Parse = Parse;
        //this.ParseError = ParseError;
        this.collection = [];
        this.data = {};
        this.name = "results";
        this.fields = [
            'message',
            'resNum'
        ];
    }
    */


}


    /*
    constructor(Parse){

        this.Parse = Parse;
        //this.ParseError = ParseError;
        this.collection = [];
        this.data = {};
        this.name = "results";
        this.fields = [
            'message',
            'resNum'
        ];
    }
        New()
        {
            //if(angular.isUndefined(obj)){

                const parseObject = new this.Parse.Object(this.name);
                console.log(parseObject);
                this.Parse.defineAttributes(parseObject,this.fields);
                return parseObject;
                /*
            }
            else 
            {
                this.Parse.defineAttributes(obj,this.fields);
                return obj;
            }
            
        }

        getAll()
        {
            return new this.Parse.Query(this.New())
                .include('resNum')
                .equalTo(resNum,'resNum')
                .find()
                .then(results=>{
                    results.forEach(result=>{
                        this.Parse.defineAttributes(result,this.fields);
                        this.Parse.definedAttributes(result.resNum,this.ResultModel.fields);
                    });
                return Promise.resolve(results);
                })
                .catch(error=>Promise.reject(error));
        }
    }
*/
angular.module('common').service('ResultModel', ResultModel);



