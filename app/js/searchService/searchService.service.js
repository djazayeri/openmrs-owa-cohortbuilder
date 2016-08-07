import angular from 'angular';

class SearchService {
  constructor($http) {
    'ngInject';
    this.searchHistory = [];
    this.$http = $http;
    // TODO get context path from manifest.webapp
  }

  addSearch(search) {
    let toAdd = angular.copy(search);
    toAdd.index = this.searchHistory.length + 1;
    this.searchHistory.push(toAdd);
    this.evaluateSearch(toAdd);
  }

  evaluateSearch(search) {
    search.loading = true;
    if (search.definitionLibraryKey) {
      search.serializedXml = `<org.openmrs.module.reporting.cohort.definition.DefinitionLibraryCohortDefinition>
                            <definitionKey>${search.definitionLibraryKey}</definitionKey>
                        </org.openmrs.module.reporting.cohort.definition.DefinitionLibraryCohortDefinition>`

    }
    if (search.serializedXml) {
      console.log(`query: ${search.serializedXml}`);
      search.promise = this.$http.post('/openmrs/ws/rest/v1/reportingrest/cohort', { serializedXml: search.serializedXml })
              .then(function(response) {
                search.resultCount = response.data.members.length;
                search.results = response.data.members;
                console.log(`search #${search.index} => ${search.resultCount}`);
                search.loading = false;
                return response;
              });
    }
  }
}

export default SearchService;