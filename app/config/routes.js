routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
	console.log($stateProvider, $urlRouterProvider);
	//$locationProvider.html5Mode({ enabled: true , requireBase: false });
	$urlRouterProvider.otherwise('/index');
	
	$stateProvider
	.state('index', {
    url: '/index',
    template: '<div ui-view></div> <kanban></kanban>'
  });
  
  
		
	
}
