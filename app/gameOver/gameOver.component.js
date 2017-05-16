import template from './gameOver.component.html'

class controller {
	constructor ($location) {
		this.$location=$location
	}


	restart(){
		this.$location.path('/play')
	}


}
export let GameOverComponent = {
	template,
	controller
}