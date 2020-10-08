var navigation = {
	templateUrl: "./navigation.html",
	controller: "NavigationController",
	bindings: {
		routeName: "@"
	}
};


angular
	.module('components.navigation')
	.component('navigation', navigation)