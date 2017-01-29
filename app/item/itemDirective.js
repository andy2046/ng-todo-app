
export default class itemDirective {
    constructor() {
        this.template = '<input type="checkbox" ng-click="ctrl.onClick({item: ctrl.item})" ng-checked="ctrl.item.active" /> <span ng-bind="ctrl.item.name"></span>';
        this.restrict = 'EA';
        this.scope = {
			item: '=set',
            onClick: '&'};
        this.controller = itemDirectiveController;
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


class itemDirectiveController {
	
	constructor() {
		this.name = 'itemDirectiveController';
	}
}