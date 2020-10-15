function AuthService(Parse){
	var auth = Parse.User;
	var authData = null;


	function storeAuthData(response){
		authData = response;
		return authData;
	}
/*
	function onSignIn(user){
		authData = user;
		return auth.currentAsync();
	}
*/
	function clearAuthData() {
		authData = null;
	}


	this.register = function (user) {
		return auth.signUp(user.username, user.password, {email:user.email})
			.then(storeAuthData);
	};

	this.login = function (user){
		return auth.logIn(user.email, user.password)
			.then(storeAuthData);
	};

	this.logout = function (){
		return auth.logOut().then(storeAuthData);
	};

/*
	this.requireAuthentication = function () {
		return auth.currentAsync().then(storeAuthData);
		//console.log("Here!");
		
		//auth.currentAsync();
		//return auth
		//	.logIn().then(onSignIn);


			return auth.$waitForSignIn().then(function onSignIn(user){
			authData=user;
			return auth.$requireSignIn();
		})
	};
*/
	this.isAuthenticated = function () {
		return !!(auth.current() && auth.current().authenticated());// null || {user}
	};

	this.getUser = function () {
		if (authData){
			return authData;
		}
	};
}

angular
	.module('components.auth')
	.service('AuthService', AuthService);