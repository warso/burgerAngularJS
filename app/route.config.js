export function routes($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $routeProvider
    .when('/', {
        templateUrl: 'gameOver/gameOver.component.html'
    })
    .when('/play', {
        template: '<dta-game></dta-game>'
    })
    .otherwise({
        redirectTo: "<h1>Cherche bien ducon !!!</h1>"
    })

}