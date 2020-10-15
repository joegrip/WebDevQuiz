var navigation = {
	templateUrl: "./navigation.html",
	controller: "NavigationController",
	bindings: {
		routeName: "@",
		user: '<',
		onLogout: '&'
	}
};


angular
	.module('components.navigation')
	.component('navigation', navigation)