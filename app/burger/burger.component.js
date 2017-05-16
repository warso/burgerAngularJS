import template from './burger.component.html'
import './burger.component.css'

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