function CourseSidebarController(){
	var ctrl = this;
	ctrl.navOptions = [{
		label: 'Welcome',
		state: 'none'
	},{
		label: 'Assignments',
		state: 'assignments'
	},{
		label: 'Course Info',
		state: 'info'
	},{
		label: 'Gradebook',
		state: 'grades'
	}];
}


angular
	.module('common')
	.controller('CourseSidebarController', CourseSidebarController);