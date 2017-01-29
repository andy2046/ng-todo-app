
export default class listDirective {
    constructor() {
        this.template = '<div class="list"> <h1><span ng-bind="ctrl.title"></span></h1> <card-directive ng-repeat="card in ctrl.cards" id="card.id" title1="card.title" description="card.description" color="card.color" tasks="card.tasks" add-task="ctrl.addTask" delete-task="ctrl.deleteTask" > </card-directive> </div>';
        this.restrict = 'EA';
        this.scope = {
			id: '@',
			title: '@',
			cards: '=',
			addTask: '=',
			deleteTask: '='			
		};
        this.controller = listDirectiveController;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }

    // Directive compile function
    compile() {
		
    }
    
    // Directive link function
    link() {
		
    }
}


class listDirectiveController {
	
	
	constructor() {
		this.name = 'listDirectiveController';
	}
	
	
}