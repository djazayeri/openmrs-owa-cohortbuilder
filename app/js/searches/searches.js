import angular from 'angular';
import template from './searches.html';
import controller from './searches.controller.js';
import widget from '../widget/widget';

let searchShortcuts = [
    {
        label: 'Males',
        definitionLibraryKey: 'reporting.library.cohortDefinition.builtIn.males'
    },
    {
        label: 'Females',
        definitionLibraryKey: 'reporting.library.cohortDefinition.builtIn.females'
    },
    {
        label: "Younger Than...",
        definitionLibraryKey: 'reporting.library.cohortDefinition.builtIn.upToAgeOnDate',
        parameters: [
            {
                name: "maxAge",
                label: "Maximum Age",
                widget: "positiveInteger.html",
                datatype: "int", // HACK: will be used as tag name in xstream value
                required: true
            }
        ]
    }
    //Also supported:
    // serializedXml: `<org.openmrs.module.reporting.cohort.definition.DefinitionLibraryCohortDefinition>
    //    <definitionKey>reporting.library.cohortDefinition.builtIn.females</definitionKey>
    //  </org.openmrs.module.reporting.cohort.definition.DefinitionLibraryCohortDefinition>`

]

let searchesComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

let searchesModule = angular.module('searches', [ 'widget' ]);

searchesModule.component('searches', searchesComponent);
searchesModule.value('searchShortcuts', searchShortcuts);

export default searchesModule;
