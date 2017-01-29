
class cardDirective {
    constructor() {
        this.template = '<div class="card"> <div ng-style="ctrl.sideColor"></div> <div class="card__edit"><a title="edit" ui-sref="edit({cardId:ctrl.id})">&#9998;</a></div> <div ng-class="ctrl.showStyle()" ng-click="ctrl.toggleDetails()"><span ng-bind="ctrl.title1"></span></div> <div ng-show="ctrl.show" class="cssSlideUp card__details"> <span ng-bind-html="ctrl.description"></span> <check-list card-id="ctrl.id" tasks="ctrl.tasks" add-task="ctrl.addTask" delete-task="ctrl.deleteTask" /> </div> </div>';
        this.restrict = 'EA';
        this.scope = {
			id: '=',
			title1: '=',
			description: '=',
			color: '=',
			tasks: '=',
			addTask: '=',
			deleteTask: '='
		};
        this.controller = cardDirectiveController;
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


class cardDirectiveController {
	
	constructor() {
		
		var self = this;
		
		self.name = 'cardDirectiveController';
		
		self.show = false;
		
		self.toggleDetails = () => {
			self.show = !self.show;
		};
		
		self.showStyle = () => {
			return self.show ? "card__title card__title--is-open" : "card__title";
		};
		
		self.sideColor = {
			"position": "absolute",
			"zIndex": -1,
			"top": "0px",
			"bottom": "0px",
			"left": "0px",
			"width": "7px",
			"background-color": self.color
		};
		
	}
	
}


cardDirective.$inject = ['ui.router'];

export default cardDirective;
