
export default class itemslistDirective {
    constructor() {
        this.template = '<div class="items-list"> <h3><span ng-bind="ctrl.title"></span></h3><span ng-if="ctrl.items.length == 0">No items available.</span> \
 <ul class="items"> <li ng-repeat="item in ctrl.items"> <item data-set="item" on-click="ctrl.onClick({item: item})"></item> </li></ul></div>';
        this.restrict = 'EA';
        this.scope = {
			title: '@',
			items: '=',
			onClick: '&'};
        this.controller = itemslistDirectiveController;
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


class itemslistDirectiveController {
	
	constructor() {
		this.name = 'itemslistDirectiveController';
	}
}