import angular from 'angular';

import itemController from './itemController.js';
import itemDirective from './itemDirective.js';


export default angular.module('item', [])
	.controller('itemController', itemController)
	.directive('item', () => new itemDirective);