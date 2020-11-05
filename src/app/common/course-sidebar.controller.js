function CourseSidebarController($rootScope, $state, currentCourseService){
	var $ctrl = this;
	$ctrl.navOptions = [{
		label: 'Welcome',
		state: 'welcome'
	},{
		label: 'Assignments',
		state: 'assignments'
	},{
		label: 'Course Info',
		state: 'course_info'
	},{
		label: 'Gradebook',
		state: 'gradebook'
	}];

	$ctrl.updateResource = updateResource;

	function updateResource(state){
		$rootScope.$emit('resourceClick', state);
	};

}

angular
	.module('common')
	.controller('CourseSidebarController', CourseSidebarController);