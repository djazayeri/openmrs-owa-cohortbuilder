class SearchesController {
    constructor(searchShortcuts, SearchService) {
        'ngInject';
        this.shortcuts = searchShortcuts;
        this.SearchService = SearchService;
    }

    getParametersAndAddSearch(search) {
        if (search.parameters && search.parameters.length > 0) {
            this.getParametersForSearch = search;
            this.parameterValues = {};
        }
        else {
            this.SearchService.addSearch(search);
        }
    }

    searchWithParameters() {
        this.SearchService.addSearch(this.getParametersForSearch, this.parameterValues);
        this.getParametersForSearch = null;
        this.parameterValues = null;
    }

    cancelSearchWithParameters() {
        this.getParametersForSearch = null;
        this.parameterValues = null;
    }

    setParameterValue(parameter, value) {
        this.parameterValues[parameter.name] = value;
    }

}

export default SearchesController;