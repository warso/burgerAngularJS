export class ControllerVN {
	constructor (BurgerService) {
		this.info = {
			name: 'Burger',
			version: '1.0.0',
			date: new Date(2012, 10, 10)
		}

		console.log(this.info.name)


		this.versionApp = false
		this.users = [
		{ name: 'John', email: 'test@ici' },
		{ name: 'lzkejflkez', email: 'sdfsd@ici' },
		{ name: 'frezfezf', email: 'tedgfdgdst@ici' },
		{ name: 'regergre', email: 'ouliu@ici' }
		]
	}
	 	
	versionToggle(){
		this.show = !this.show;
	}

}



