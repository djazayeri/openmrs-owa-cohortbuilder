import angular from 'angular';
import template from './search.html';
import controller from './search.controller.js';

let searchComponent = {
    restrict: 'E',
    bindings: {
        search: "<"
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

let searchesModule = angular.module('search', [ ])
        .component('search', searchComponent);

export default searchesModule;
