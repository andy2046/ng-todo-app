import angular from 'angular';

import kanban from './kanban/kanban.js';
import uirouter from 'angular-ui-router';
import cardform from './cardform/cardform.js';
import routes from './config/routes';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';

angular.module('todo', [
	kanban,
	cardform,
	ngSanitize,
	ngAnimate,
	uirouter,
	ngMessages
])
.config(routes);

angular.bootstrap(document, ['todo']);

