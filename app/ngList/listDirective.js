

export default class listDirective {
    constructor() {
        this.template = '<div class="main"> <items-list data-title="Items On Sale" data-items="ctrl.activeItems" data-on-click="ctrl.switchStatus(item)"></items-list> \
 <items-list data-title="Items Sold Out" data-items="ctrl.inactiveItems" data-on-click="ctrl.switchStatus(item)"></items-list> </div>';
        this.scope = {};
		this.restrict = 'EA';
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
		var self = this;
				
		self.items = [{       id: 1,       name: 'Apple',       active: true     }, {       id: 2,       name: 'Orange',       active: true     }, {       id: 3,       name: 'Banana',       active: false     }, {       id: 4,       name: 'Kiwi',       active: true     }, {       id: 5,       name: 'Avocado',       active: false     }];
		
		self.updateItems();
	
	}
	
	switchStatus(item) {
	  var self = this;
      item.active = !item.active;
      self.updateItems();
    }
	
	updateItems(filteredItems) {
	  var self = this;
      var collection = filteredItems || self.items;
      self.activeItems = collection.filter(function(item) {
        return item.active;
      });
      
      self.inactiveItems = collection.filter(function(item) {
        return !item.active;
      });
    }
	
}