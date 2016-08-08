class SearchController {
    formatDisplay(search) {
        let ret = `${search.index}. ${search.label}`;
        if (search.paramValues) {
            angular.forEach(search.paramValues, function(val, key) {
                ret += `\n${key} = ${val.display}`;
            });
        }
        return ret;
    }
    formatResults(search) {
        if (search.loading) {
            return "Calculating...";
        } else {
            return search.resultCount;
        }
    }
}

export default SearchController;
