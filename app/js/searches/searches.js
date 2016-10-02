import angular from 'angular';
import template from './searches.html';
import controller from './searches.controller.js';
import widget from '../widget/widget';

let searchShortcuts = [
    {
        label: 'Males',
        description: 'Male patients',
        definitionLibraryKey: 'reporting.library.cohortDefinition.builtIn.males'
    },
    {
        label: 'Females',
        description: 'Female patients',
        definitionLibraryKey: 'reporting.library.cohortDefinition.builtIn.females'
    },
    {
        label: 'Age...',
        description: 'Age between {0} and {1} years old',
        definitionLibraryKey: 'reporting.library.cohortDefinition.builtIn.ageRangeOnDate',
        parameters: [
            {
                name: "minAge",
                label: "Minimum Age",
                widget: "nonNegativeInteger.html",
                datatype: "int",
                required: false
            },
            {
                name: "maxAge",
                label: "Maximum Age",
                widget: "positiveInteger.html",
                datatype: "int",
                required: false
            }
        ]
    },
    {
        label: 'Birthdate...',
        description: 'Born between {0} and {1}',
        definitionLibraryKey: 'reporting.library.cohortDefinition.builtIn.bornDuringPeriod',
        parameters: [
            {
                name: "startDate",
                label: "Earliest Birthdate",
                widget: "date.html",
                datatype: "date",
                required: false
            },
            {
                name: "endDate",
                label: "Latest Birthdate",
                widget: "date.html",
                datatype: "date",
                required: false
            }
        ]
    }

    //Also supported (instead of definitionLibraryKey):
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
