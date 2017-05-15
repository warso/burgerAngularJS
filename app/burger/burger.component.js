import template from './burger.component.html'

class controller {
    constructor () {}

    $onChanges () {
        this.toppings = angular.copy(this.toppings)
    }

}

export let BurgerComponent = {
    template,
    controller,
    bindings: {
        toppings: '<'}
    }