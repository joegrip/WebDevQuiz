var courseMainView = {
	templateUrl: "./courseMainView.html",
	controller: "CourseMainViewController",
	bindings: {
		routeName: "@"
	}
};


angular
	.module('components.courseMainView')
	.component('courseMainView', courseMainView)
	.config(function ($stateProvider) {
		$stateProvider
			.state('courseMainView', {
				url: '/courseMainView',
				component: 'courseMainView',
				parent: 'app'
			})
	});