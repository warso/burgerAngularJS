import template from './game.component.html'

class controller {
	constructor (ToppingsService) {
		this.ToppingsService = ToppingsService
		this.burgers=[]
	}

	$onInit () {
		this.ToppingsService.getToppings()
		.then(toppings => this.toppings = toppings)

		this.ToppingsService.getRandomRecipe()
		.then(recipe => this.recipe = recipe)
	}

	selectTopping (topping) {
		this.burgers = [...this.burgers, topping.name]
		const check = this.ToppingsService.checkRecipe(this.burgers, this.recipe)
		if (check === 'VALID') {
			this.burgers = []
			this.recipe = []
			this.ToppingsService.getRandomRecipe()
			.then(recipe => this.recipe = recipe)
		}
	}
}

export let GameComponent = {
	template,
	controller,
	bindings: {}
}