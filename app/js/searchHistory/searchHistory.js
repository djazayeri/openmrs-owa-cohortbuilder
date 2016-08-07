import angular from 'angular';
import template from './searchHistory.html';
import controller from './searchHistory.controller.js';
import Search from '../search/search';
import searchService from '../searchService/searchService';

let searchHistoryComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

let searchHistoryModule = angular.module('searchHistory', [ Search.name, searchService.name ]);

searchHistoryModule.component('searchHistory', searchHistoryComponent);

export default searchHistoryModule;
