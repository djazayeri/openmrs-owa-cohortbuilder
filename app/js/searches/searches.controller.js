class SearchesController {
    constructor(searchShortcuts, SearchService) {
        'ngInject';
        this.shortcuts = searchShortcuts;
        this.SearchService = SearchService;
    }

    addSearch(search) {
        this.SearchService.addSearch(search);
    }
}

export default SearchesController;