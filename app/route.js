export function Route($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true)

	$routeProvider
	.when("/burger", {
		templateUrl: "views/burger.html",
		controller: "BurgersController",
		controllerAs: "$ctrl"
	})
	.when("/game", {
		templateUrl: "views/game.html",
		controller: "GameController",
		controllerAs: "$ctrl"
	})
	.when("/burgerDetails/:id?", {
		templateUrl: "views/burgerDetails.html",
		controller: "BurgerDetailsController",
		controllerAs: "$ctrl"
	})

	.otherwise({
		template: "<h1>Cherche bien ducon !!!</h1>"
	})
}