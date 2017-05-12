export class GameController {
	constructor (ToppingsService) {
		this.ToppingsService = ToppingsService

		ToppingsService.getToppings()
		.then(toppings => this.toppings = toppings)

		ToppingsService.getRandomRecipe()
		.then(recipe => this.recipe = recipe)
		

	}
}