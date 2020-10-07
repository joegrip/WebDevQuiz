var navigation = {
	templateUrl: "./navigation.html",
	controller: "NavigationController"
};

angular
	.module('components.navigation')
	.component('navigation', navigation)
	.config(function ($stateProvider) {
		$stateProvider
			.state('navigation', {
				url: '/navigation',
				component: 'navigation',
				parent: 'app'
			})
	});