class SearchController {
    formatDisplay(search) {
        return `${search.index}. ${search.name}`;
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
