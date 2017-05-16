import './game.component.css'
import template from './game.component.html'

class controller {
	constructor (ToppingsService, $location) {
		this.ToppingsService = ToppingsService
		this.$location=$location
	}

	$onInit () {
		this.restart()
		this.ToppingsService.getToppings()
		.then(toppings => this.toppings = toppings)
	}

	selectToppings (toppings) {
		this.burgers = [...this.burgers, toppings.name]
		switch (this.ToppingsService.checkRecipe(this.burgers, this.recipe)) {
			case 'VALID' :
			alert("Good Job !")
			this.restart()
			break
			case 'INVALID' :
			this.gameover()
			break
		}
	}

	restart () {
		this.burgers = []
		this.recipe = []
		this.running = true
		this.ToppingsService.getRandomRecipe()
		.then(recipe => this.recipe = recipe)
	}


	gameover() {
		this.$location.path('/')
	}
}

export let GameComponent = {
	template,
	controller,
	bindings: {}
}