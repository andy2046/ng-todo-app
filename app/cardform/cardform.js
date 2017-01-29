import angular from 'angular';

import cardformController from './cardformController.js';
import cardformDirective from './cardformDirective.js';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import uirouter from 'angular-ui-router';
import cardsData from '../service/data.service';
import routing from '../config/cardform.routes';

export default angular.module('cardform', [
		cardsData,
		ngSanitize,
		ngAnimate,
		uirouter,
		ngMessages
		])
	.config(routing)
	.controller('cardformController', cardformController)
	.directive('cardform', () => new cardformDirective)
	.name;