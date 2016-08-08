import angular from 'angular';

class SearchService {
  constructor($http) {
    'ngInject';
    this.searchHistory = [];
    this.$http = $http;
    // TODO get context path from manifest.webapp
  }

  addSearch(search, paramValues) {
    let toAdd = angular.copy(search);
    toAdd.index = this.searchHistory.length + 1;
    toAdd.paramValues = paramValues;

    this.searchHistory.push(toAdd);
    this.evaluateSearch(toAdd);
  }

  evaluateSearch(search) {
    search.loading = true;
    if (search.definitionLibraryKey) {
      let paramVals = '';
      if (search.paramValues) {
          paramVals = '<parameterValues>';
          angular.forEach(search.paramValues, function(val, key) {
              var param = search.parameters.find(function(p) { return p.name == key; });
              paramVals += '<entry>';
              paramVals += `<string>${key}</string>`;
              paramVals += `<${param.datatype}>${val.value}</${param.datatype}>`;
              paramVals += '</entry>';
          });
          paramVals += '</parameterValues>';
      }
      search.serializedXml = `<org.openmrs.module.reporting.cohort.definition.DefinitionLibraryCohortDefinition>
                            <definitionKey>${search.definitionLibraryKey}</definitionKey>
                            ${paramVals}
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