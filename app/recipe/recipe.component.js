import template from './recipe.component.html'

class controller {

    constructor ($timeout) {
        this.$timeout = $timeout
    }

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse();
            // reset timer
            this.time = { value: 20 }
        }
    }

    end () {
        console.log('end')
    }

    start (remain) {
        console.log(remain)
    }

}

export let RecipeComponent = {
    controller,
    template,
    bindings: {
        toppings: '<',
        onTimeout: '&'
    }
}