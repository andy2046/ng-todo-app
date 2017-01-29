import angular from 'angular';

import listController from './listController.js';
import listDirective from './listDirective.js';

import card from '../card/card.js';

export default angular.module('list', [card])
	.controller('listController', listController)
	.directive('cardList', () => new listDirective)
	.name;