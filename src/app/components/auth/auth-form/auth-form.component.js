const authForm = {
	templateUrl: './auth-form',
	controller: 'AuthFormController',
	bindings: {
		
	}
}

angular
	.module('components.auth')
	.component('authForm', authForm);