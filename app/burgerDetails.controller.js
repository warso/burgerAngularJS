import {uniq} from 'lodash'

export class BurgerDetailsController {

	constructor (BurgerService, ToppingsService, $routeParams, $location) {

		this.BurgerService=BurgerService;
		this.ToppingsService=ToppingsService;
		this.$routeParams=$routeParams;
		this.$location=$location;

		BurgerService.getBurger($routeParams.id)
		.then(burger => this.burger = burger)
		.catch(err => console.error(err))

		ToppingsService.getToppings()
		.then(toppings => this.toppings = toppings)

	}

	save (form) {
		if (form.$invalid) return
			this.BurgerService.save(this.burger)
		.then(() => this.$location.path('/burger'))
	}



}
