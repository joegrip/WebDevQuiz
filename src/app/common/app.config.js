function init(ParseProvider){
	var MY_PARSE_APP_ID = 'yXobu40RXBD0tp519dj8Kp5gBPhyGAhQC6fyauvQ';
	var MY_PARSE_JS_KEY = 'oP0JBaUQKtX4bGpIg5ZEu6944MuCSL6Cwfx9uLFs';
	ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
	ParseProvider.serverURL = 'https://parseapi.back4app.com/';
}

angular
	.module('common')
	.config(init);