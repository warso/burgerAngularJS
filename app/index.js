import angular from 'angular';
import RouteModule from 'angular-route'
import css from 'bootstrap/dist/css/bootstrap.css';
/*import { UserController } from './user.controller';*/
import { ControllerVN } from './controller.vn';
import { TabsController } from './tabs.controller';
import { Reverse } from './reverse.filter';
import { BurgersController } from './burgers.controller';
import { BurgerService } from './burger.service';
import { ToppingsService } from './toppings.service';
import { GameController } from './game.controller';
import { BurgerDetailsController } from './burgerDetails.controller';
import {Route} from './route';





// création d'un module app (application)
angular.module('app', [
	RouteModule
	])

//hook de configuration config
.config(Route)

/*.controller("UserController", UserController)*/
.controller("ControllerVN", ControllerVN)
.controller("TabsController", TabsController)
.controller("BurgersController", BurgersController)
.controller("GameController", GameController)
.controller("BurgerDetailsController", BurgerDetailsController)


.service('BurgerService', BurgerService)
.service('ToppingsService', ToppingsService)

.filter("Reverse", Reverse)



/*
// hook d'excution run
.run(function () {
	console.log("RUN ANGULAR");
});
*/