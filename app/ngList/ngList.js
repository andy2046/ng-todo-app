import angular from 'angular';

import listController from './listController.js';
import listDirective from './listDirective.js';
import itemslist from '../itemslist/itemslist.js'

export default angular.module('ngList', ['itemslist'])
	.controller('listController', listController)
	.directive('listDirective', () => new listDirective);