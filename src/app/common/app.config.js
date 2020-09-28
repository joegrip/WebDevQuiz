function init(ParseProvider){
	var MY_PARSE_APP_ID = 'ewklS9YXnCAbt0wqoQNJ0IaN94mmelJq15d1b5nB';
	var MY_PARSE_JS_KEY = 'reZlQlDiufI31pVGR3iZ0bRR6w8dANvfaPyPG21I';
	ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
	ParseProvider.serverURL = 'https://parseapi.back4app.com/';
}

angular
	.module('common')
	.config(init);