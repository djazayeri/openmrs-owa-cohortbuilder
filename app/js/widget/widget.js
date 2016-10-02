import angular from 'angular';
import WidgetController from './widget.controller'
import positiveIntegerTemplate from './positiveInteger.html';
import nonNegativeIntegerTemplate from './nonNegativeInteger.html';
import dateTemplate from './date.html';

let widgetModule = angular.module('widget', [ ]);

widgetModule.run(function($templateCache) {
    'ngInject';
    $templateCache.put('positiveInteger.html', positiveIntegerTemplate);
    $templateCache.put('nonNegativeInteger.html', nonNegativeIntegerTemplate);
    $templateCache.put('date.html', dateTemplate);
});

widgetModule.component('widget', {
    restrict: 'E',
    bindings: {
        parameter: '<',
        onChange: '&'
    },
    template: '<ng-include src="vm.parameter.widget"></ng-include>',
    controller: WidgetController,
    controllerAs: 'vm'
});

export default widgetModule;