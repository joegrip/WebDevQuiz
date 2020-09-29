var result = {
	templateUrl: "./result.html",
	controller: "ResultController"
};

angular
	.module('components.result')
	.component('result', result)
	.config(function ($stateProvider) {
		$stateProvider
			.state('result', {
				url: '/',
				component: 'result'
			})
	});