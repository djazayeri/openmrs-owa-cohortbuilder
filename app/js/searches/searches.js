import angular from 'angular';
import template from './searches.html';
import controller from './searches.controller.js';

let searchShortcuts = [
    {
        name: 'Males',
        definitionLibraryKey: 'reporting.library.cohortDefinition.builtIn.males'
    },
    {
        name: 'Females',
        serializedXml: `<org.openmrs.module.reporting.cohort.definition.DefinitionLibraryCohortDefinition>
                            <definitionKey>reporting.library.cohortDefinition.builtIn.females</definitionKey>
                        </org.openmrs.module.reporting.cohort.definition.DefinitionLibraryCohortDefinition>`
    }
]

let searchesComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

let searchesModule = angular.module('searches', [ ]);

searchesModule.component('searches', searchesComponent);
searchesModule.value('searchShortcuts', searchShortcuts);

export default searchesModule;
