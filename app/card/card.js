import angular from 'angular';

import cardController from './cardController.js';
import cardDirective from './cardDirective.js';
import checklist from '../checklist/checklist.js'

import uirouter from 'angular-ui-router';

export default angular.module('card', [checklist,uirouter])
	.controller('cardController', cardController)
	.directive('cardDirective', () => new cardDirective)
	.name;