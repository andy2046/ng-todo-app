
export default class checklistDirective {
    constructor() {
			
        this.template = '<div class="checklist"> <ul> <li class="checklist__task" ng-repeat="task in ctrl.tasks"> <input type="checkbox" ng-model="task.done" ng-checked="task.done" /> <span ng-bind="task.name"></span> <a title="remove" href="#" class="checklist__task--remove" ng-click="ctrl._deleteTask(ctrl.cardId,task.id,$index)"> </a> </li> </ul> <input type="text" class="checklist--add-task"	placeholder="Type then hit Enter to add a task" ng-keypress="ctrl._addTask(ctrl.cardId,$event)" /></div>';
        this.restrict = 'EA';
        this.scope = {
			cardId: '=',
			tasks:'=',
            addTask: '=',
			deleteTask: '=' };
        this.controller = checklistDirectiveController;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }
	
    // Directive compile function
    compile() {
		
    }
    
    // Directive link function
    link(scope,ele,attr) {
		
	}
}


class checklistDirectiveController {
	
	constructor() {
		this.name = 'checklistDirectiveController';
	}
	
	_addTask(cardId, evt) {
		this.addTask(cardId, evt);
		//console.log(this);
	}
	
	_deleteTask(cardId, taskId, taskIndex) {
		this.deleteTask(cardId, taskId, taskIndex);
		//console.log(this);
	}
	
}