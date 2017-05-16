const API_URL = 'http://localhost:3000/toppings'

export class ToppingsService {
	constructor ($http,$q) {
		this.$http = $http
		this.toppings=[]
		this.$q=$q
	}

    // return promise of toppings
    getToppings () {
    	if (this.toppings.length!==0) {
    		return this.$q.resolve(this.toppings)
    	}

    	return this.$http.get(API_URL)
    	.then(response => response.data)
    	.then(toppings => {
    		this.toppings = toppings
    		return toppings
    	})
    }

    getRandomRecipe(){
    	return this.getToppings()
    	.then(this.toStringToppings)
    	.then(this.doubleToppings)  
    	.then(this.buildRandomRecipe.bind(this));
    }

    checkRecipe (burgers, recipe) {
        for (let i = 0; i < burgers.length; i++) {
            if (burgers[i] !== recipe[i]) return 'INVALID'
        }
    if (burgers.length === recipe.length) return 'VALID'
        return 'RUNNING'
}

doubleToppings(toppings) {
   return [...toppings, ...toppings];
}
toStringToppings(toppings) {
   return toppings.map(topping => topping.name);
}

getRandomNbToppings(min, max) {
   return min + Math.floor(Math.random() * (max - min + 1));
}

buildRandomRecipe(doubleToppings) {
   let nbToppings = this.getRandomNbToppings(3, 6);
   let recipe = [];

   for (let i = 0; i < nbToppings; i++) {
      let j = Math.floor(Math.random() * doubleToppings.length);
      let randomTopping = doubleToppings.splice(j, 1);
      recipe.push(randomTopping[0]); 
  }
  return recipe;
}




}