var home = {
	template: "./home.html",
	controller: "HomeController"
};



angular
	.module('home', [])
	.component('home', home)
	.config(function ($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				component: 'home'
			})
	});