export class ControllerVN {
	constructor(){
		this.name='burger';
		this.version='1.0.0';
		this.show=false;
	}


	versionApp(){
		this.show=true;
	}

	versionToggle(){
		this.show = !this.show;
	}

};