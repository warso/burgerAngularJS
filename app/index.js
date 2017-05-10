import angular from 'angular';
import css from 'bootstrap/dist/css/bootstrap.css';
import { UserController } from './user.controller';
import { ControllerVN } from './controller.vn';
import { TabsController } from './tabs.controller';
import { Reverse } from './reverse.filter';


// création d'un module app (application)
angular.module('app', [])
.controller("UserController", UserController)
.controller("ControllerVN", ControllerVN)
.controller("TabsController", TabsController)


.filter("Reverse", Reverse)

/*// hook de configuration config
.config(function(){
	console.log("Config angular");
})
// hook d'excution run
.run(function () {
	console.log("RUN ANGULAR");
});*/
