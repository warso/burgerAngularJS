/*

import GravatarModule from './gravatar'*/
/*import { GameController } from './game.controller';
import { BurgerDetailsController } from './burgerDetails.controller';
import {Route} from './route';*/
/*import { UserController } from './user.controller';*/
/*import { ControllerVN } from './controller.vn';
import { TabsController } from './tabs.controller';
import { Reverse } from './reverse.filter';
import { BurgersController } from './burgers.controller';*/
import css from 'bootstrap/dist/css/bootstrap.css';
import { BurgerService } from './burger.service';
import { ToppingsService } from './toppings.service';
import {GameComponent} from './game/game.component';
import {BurgerComponent} from './burger/burger.component';
import {ToppingsComponent} from './toppings/toppings.component';
import {RecipeComponent} from './recipe/recipe.component';
import angular from 'angular';
// création d'un module app (application)
angular.module('app', [])

.component('dtaGame', GameComponent)
.component('dtaToppings', ToppingsComponent)
.component('dtaBurger', BurgerComponent)
.component('dtaRecipe', RecipeComponent)

.controller('MyController', class MyController {
	constructor () {
		this.mail = "warsama.ilmiamir@gmail.com"	

	}

	talk (word) {
		console.log(word)
	}
})

.service('BurgerService', BurgerService)
.service('ToppingsService', ToppingsService)


/*//hook de configuration config
.config(Route)*/

/*.controller("UserController", UserController)*/
/*.controller("ControllerVN", ControllerVN)
.controller("TabsController", TabsController)
.controller("BurgersController", BurgersController)
.controller("GameController", GameController)
.controller("BurgerDetailsController", BurgerDetailsController)

.filter("Reverse", Reverse)*/
/*
// hook d'excution run
.run(function () {
	console.log("RUN ANGULAR");
});
*/