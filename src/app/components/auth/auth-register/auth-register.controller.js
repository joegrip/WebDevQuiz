function RegisterController(AuthService, $state){
	const $ctrl = this;

	$ctrl.$onInit = function(){
		$ctrl.error = null;
		$ctrl.user = {
			name: '',
			email: '',
			password: ''
		};

	};

	$ctrl.createUser = function(event){
		return AuthService
				.register(event.user)
				.then(function (user) {
					// success
					$state.go('app');

				}, function (reason) {
					// error
					$ctrl.error = reason.message;

				});
	};
}

angular
	.module('components.auth')
	.controller('RegisterController', RegisterController);