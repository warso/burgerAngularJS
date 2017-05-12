import { uniq, clone } from 'lodash'
import uuid from 'uuid/v4'

export class BurgersController {
	constructor (BurgerService) {
		this.BurgerService=BurgerService
		this.burgers=[]


		BurgerService.getBurgers()
		.then(burgers => this.burgers = burgers)
		.catch(err => console.error(err))

		this.col = 'name'
		this.desc = false

		this.fetchBurgers()
	}

	fetchBurgers() {
		this.BurgerService.getBurgers()
		.then(burgers => this.burgers = burgers)
	}

	getToppings () {
		return uniq(this.burgers
			.reduce((acc, {toppings}) => [...acc, ...toppings], []))

	}

	sortBy (col) {
		if (this.col !== col) this.desc = false
			else this.desc = !this.desc
				this.col = col
		}

		applySort (burger) {
			if (this.col === 'name') return burger.name
				if (this.col === 'toppings') return burger.toppings.length
			}

		remove (burger) {
			this.BurgerService.remove(burger)
			.then(() => this.fetchBurgers())
		}

	}


	/*this.newburger = this._initBurger()*/
   /* <=>
    .reduce((acc, burger) => {
      let toppings = burger.toppings
      return acc.concat(toppings)
    }, [])
    */
/*	save (form) {
		if (form.$invalid) return

			if (!this.newburger.id) {
      // creation burger
      this.newburger.id = uuid()
      this.burgers.push(clone(this.newburger))
  } else {
      // modification burger
      let idx = this.burgers.findIndex(b => b.id === this.newburger.id)
      if (idx !== -1) {
      	this.burgers[idx] = clone(this.newburger)
      }
  }

  this.newburger = this._initBurger()

    // reset form state
    form.$setUntouched()

_initBurger () {
	return {
		id: null,
		name: '',
		toppings: [],
		creator: ''
	}
}
    editBurger (burger) {
    //this.newburger = clone(burger)
    this.newburger = burger
}
}*/