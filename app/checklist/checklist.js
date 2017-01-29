import angular from 'angular';

import checklistController from './checklistController.js';
import checklistDirective from './checklistDirective.js';


export default angular.module('checklist', [])
	.controller('checklistController', checklistController)
	.directive('checkList', () => new checklistDirective)
	.name;