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
	.config(function ($stateProvider ) {
		$stateProvider
			.state('courseMainView', {
				url: '/courseMainView/:CRN/:subpage',
				component: 'courseMainView',
				parent: 'app',
				params: {
					CRN: '30023',
					subpage: ''
				}
			})
	});