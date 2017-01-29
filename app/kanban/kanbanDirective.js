
class kanbanDirectiveController {
	
	constructor(cardsData) {
		
		//console.log(cardsData);

		var self = this;
		
		self.name = 'kanbanDirectiveController';
		
		self.cards = cardsData.getCards();
		//console.log(self.cards);

		self.cardsFilter = (stat) => {
			return self.cards.filter((card) => card.status === stat);
		}; 
		
		self.todo = self.cardsFilter("todo");
		self.inprogress = self.cardsFilter("in-progress");
		self.done = self.cardsFilter("done");
		
		self.addTask = (cardId, evt) => {
				
		var self = this;
		
		if(evt.which === 13) {
					
					let cardIndex = self.cards.findIndex((card)=>card.id == cardId);
					// Create a new task with the given name and a temporary ID
					let newTask = {id:Date.now(), name:evt.target.value, done:false};
					self.cards[cardIndex].tasks.push(newTask);
					evt.target.value = '';
				}
				
	};
		
	self.deleteTask = (cardId, taskId, taskIndex) => {
		
		var self = this;
		let cardIndex = self.cards.findIndex((card)=>card.id == cardId);
		self.cards[cardIndex].tasks.splice(taskIndex,1);
		
	};	
		
	
	}
	
}


class kanbanDirective {
    constructor(uirouter) {
        this.template = `<div class="app"> <a title="new" class="float-button" ui-sref="new">+</a> <card-list id="todo" title="To Do" cards="ctrl.todo" add-task="ctrl.addTask" delete-task="ctrl.deleteTask" ></card-list> <card-list id="in-progress" title="In Progress" cards="ctrl.inprogress" add-task="ctrl.addTask" delete-task="ctrl.deleteTask" ></card-list> <card-list id="done" title="Done" cards="ctrl.done" add-task="ctrl.addTask" delete-task="ctrl.deleteTask" ></card-list> </div>`;
        this.restrict = 'EA';
        this.scope = {
			
		};
        this.controller = kanbanDirectiveController;
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

kanbanDirectiveController.$inject = ['cardsData'];
kanbanDirective.$inject = ['ui.router'];

export default kanbanDirective;
