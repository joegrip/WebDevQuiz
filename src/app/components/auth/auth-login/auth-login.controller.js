function LoginController($rootScope){
	const $ctrl = this;

	this.$onInit = function(){
		$ctrl.user = {
			name: '',
			email: '',
			password: ''
		}
	}

	this.loginUser = function(event){
		
	}
}

angular
	.module('components.auth')
	.controller('LoginController', LoginController);