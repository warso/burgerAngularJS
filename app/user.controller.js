export class UserController{
	constructor(){
		console.log('User Controller');
		this.firstname='John';
		this.lastname='Doe';

	}

	getName(){
		return this.firstname + ' ' + this.lastname.toUpperCase();
	}

};