import angular from 'angular';

class CardsData {
	
	constructor() {
		
		var self = this;
		
		self.cards = [ { "id": 1, "title": "Read the Book", "description": "I should read the <strong>whole</strong> book", "color": "#BD8D31", "status": "in-progress", "tasks": [ { "id": 1, "name": "Read table of content", "done": true } ] }, { "id": 3, "title": "Go eating", "description": "I should eat the <strong>whole</strong> BBQ chicken", "color": "#0074D9", "status": "done", "tasks": [ { "id": 1, "name": "just eat", "done": true } ] }, { "id": 2, "title": "Write some code", "description": "Code along with the samples in the book. My source code can be found at <a title='github' href='https://github.com/andy2046'>github</a>", "color": "#3A7E28", "status": "todo", "tasks": [ { "id": 1, "name": "ContactList Example", "done": true }, { "id": 2, "name": "Kanban Example", "done": false }, { "id": 3, "name": "My own experiments", "done": false } ] } ];
		
	
  }
  
  getCards() {
	  var self = this;
	  console.log(self.cards);
	  return self.cards;
  }
  
  getCard(cardId) {
    return this.cards.filter(function (Card) {
		return Card.id == cardId;
	})[0];
  }
  
  upsertCards(Card) {
	  let cardIndex = this.cards.findIndex((card)=>card.id == Card.id);
	  
	  if(cardIndex == -1) {
		  this.cards.push(Card);		  
	  } else {
		  this.cards[cardIndex] = Card;		  
	  }
	  
	  this.getCards();
  }
  
}

export default angular.module('service.cards-data', [])
  .service('cardsData', CardsData)
  .name;
