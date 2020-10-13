var courseSidebar = {
	templateUrl: './course-sidebar.html',
	controller: 'CourseSidebarController'
};

angular
	.module('common')
	.component('courseSidebar', courseSidebar);