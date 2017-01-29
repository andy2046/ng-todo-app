import angular from 'angular';

import itemslistController from './itemslistController.js';
import itemslistDirective from './itemslistDirective.js';
import item from '../item/item.js'

export default angular.module('itemslist', ['item'])
	.controller('itemslistController', itemslistController)
	.directive('itemsList', () => new itemslistDirective);