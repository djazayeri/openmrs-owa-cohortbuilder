import angular from 'angular';
import SearchService from './searchService.service'

let searchServiceModule = angular.module('searchService', [ ]);

searchServiceModule.service("SearchService", SearchService);

export default searchServiceModule;