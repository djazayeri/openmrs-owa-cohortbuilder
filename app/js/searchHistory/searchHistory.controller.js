class SearchHistoryController {
    constructor(SearchService) {
        'ngInject';
        this.SearchService = SearchService;
    }

    addSearch(search) {
        this.SearchService.addSearch(search);
    }

    hasAnySearches() {
        return this.SearchService.searchHistory.length > 0;
    }

    getSearchHistory() {
        return this.SearchService.searchHistory;
    }
}

export default SearchHistoryController;
