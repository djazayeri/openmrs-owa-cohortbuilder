class WidgetController {
    constructor($scope) {
        'ngInject';
        this.$scope = $scope;
    }

    $onInit() {
        let onChangeCallback = this.onChange;
        let parameter = this.parameter;
        this.$scope.$watch('vm.value', function(newVal) {
            let valueToSet = newVal ? {
                                display: newVal,
                                value: newVal
                            } : null;
            onChangeCallback({
                                 parameter: parameter,
                                 value: valueToSet
                             });
        });
    }

}

export default WidgetController;