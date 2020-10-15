function LoginController($rootScope, AuthService){
	const $ctrl = this;

	$ctrl.$onInit = function(){
		$ctrl.error = null;
		$ctrl.user = {
			name: '',
			email: '',
			password: ''
		};

	};

	$ctrl.loginUser = function(event){
		return AuthService
				.login(event.user)
				.then(function (user) {
					// success
					$state.go(courseMainView);
				}, function (reason) {
					// error
					$ctrl.error = reason.message;
				});
	};

}

angular
	.module('components.auth')
	.controller('LoginController', LoginController);