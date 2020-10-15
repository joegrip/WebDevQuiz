function AuthService(Parse){
	var auth = Parse.User;
	var authData = null;


	function storeAuthData(response){
		authData = response;
		return authData;
	}

	this.register = function (user) {
		return auth.signUp(user.username, user.password, {email:user.email})
			.then(storeAuthData);
	};

	this.login = function (user){
		return auth.logIn(user.email, user.password)
			.then(storeAuthData);
	};

}

angular
	.module('components.auth')
	.service('AuthService', AuthService);