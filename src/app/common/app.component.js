var app = {
  templateUrl: './app.html',
  controller: 'AppController'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider) {
		$stateProvider
			.state('app', {
				redirectTo: 'courseMainView',
				url: '',
				component: 'app'
			})
	})