import angular from 'angular';

import kanbanController from './kanbanController.js';
import kanbanDirective from './kanbanDirective.js';

import cardsData from '../service/data.service';
import uirouter from 'angular-ui-router';

import list from '../list/list.js';

export default angular.module('kanban', [list,cardsData,uirouter])
	.controller('kanbanController', kanbanController)
	.directive('kanban', () => new kanbanDirective)
	.name;