class SearchController {
    constructor(SearchService) {
        'ngInject';
        this.SearchService = SearchService;
    }

    formatDisplay(search) {
        if (search.description) {
            let ret = search.description;
            if (search.parameters) {
                for (const [index, param] of search.parameters.entries()) {
                    let displayVal = search.paramValues[param.name];
                    if (displayVal) {
                        displayVal = displayVal.display;
                    }
                    else {
                        displayVal = "(blank)";
                    }
                    ret = ret.replace(`{${index}}`, displayVal);
                }
            }
            return `${search.index}. ${ret}`;
        }
        else {
            let ret = `${search.index}. ${search.label}`;
            if (search.paramValues) {
                angular.forEach(search.paramValues, function(val, key) {
                    ret += `\n${key} = ${val.display}`;
                });
            }
            return ret;
        }
    }

    formatResults(search) {
        if (search.loading) {
            return "Calculating...";
        } else {
            return search.resultCount;
        }
    }

    removeFromHistory(search) {
        this.SearchService.removeSearch(search.index);
    }
}

export default SearchController;
