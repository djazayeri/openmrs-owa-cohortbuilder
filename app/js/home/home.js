import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeTemplate from './home.html';
import homeComponent from './home.component.js';
import uicommons from 'openmrs-contrib-uicommons';
import searchHistory from '../searchHistory/searchHistory';
import searches from '../searches/searches';

let homeModule = angular.module('home', [ searchHistory.name, searches.name, uiRouter, 'openmrs-contrib-uicommons'])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            template: homeTemplate
        })
    })
    .component('home', homeComponent);

export default homeModule;
