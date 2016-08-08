import angular from 'angular';
import WidgetController from './widget.controller'
import positiveIntegerTemplate from './positiveInteger.html';

let widgetModule = angular.module('widget', [ ]);

widgetModule.run(function($templateCache) {
    'ngInject';
    $templateCache.put('positiveInteger.html', positiveIntegerTemplate);
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