routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
	console.log($stateProvider, $urlRouterProvider);
	
	
	
	
  $stateProvider
		.state('new', {
			parent: 'index',
			url: '/new',
			resolve: {
				myResolve1: ['$stateParams',function($stateParams) {
				console.log($stateParams);
				return $stateParams;
				}]
			},
			onEnter: ['$stateParams',function($stateParams) { 
				console.log($stateParams);
			}],
			params: {
				cards1 : { 
					//array : true,
					//value: "defaultValue"
				}				
			},
			templateProvider: ['$stateParams',function ($stateParams) {
				console.log($stateParams);
				return '<cardform button-label="Create Card" card-id=""></cardform>';
			}]
		})
		.state('edit', {
			parent: 'index',
			url: '/edit',
			resolve: {
				myResolve1: ['$stateParams',function($stateParams) {
				//console.log($stateParams);
				return $stateParams;
				}]
			},
			params: {
				cardId : { 
					//array : true,
					//value: "defaultValue"
				}				
			},
			templateProvider: ['$stateParams',function ($stateParams) {
				//console.log($stateParams);
				return '<cardform button-label="Edit Card" card-id="' + $stateParams.cardId + '"></cardform>';
			}]
		});
		
}

