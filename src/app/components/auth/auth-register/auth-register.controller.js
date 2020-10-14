function RegisterController($rootScope){
	const $ctrl = this;

	this.$onInit = function(){
		$ctrl.error = null;
		$ctrl.user = {
			name: '',
			email: '',
			password: ''
		}

	}

	this.createUser = function(event){
		
	}
}

angular
	.module('components.auth')
	.controller('RegisterController', RegisterController);