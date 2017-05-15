import template from './gravatar.component.html'
import md5 from 'md5'
import './gravatar.component.css'


class controller{
	constructor(){
		this.displayGravatar=false
	}

	$onInit(){
		this.md5=md5(this.email) 
	}

	toogleGravatar(){
		this.displayGravatar=!this.displayGravatar;
	}

	clicYo(){
		this.onTalk({
			$event:"Je s'appelle Groot !"
		})
	}

	clicHi(){
		this.onTalk({
			$event:"I'm Batman!"
		})
	}

	clic(form){
		if (form.$invalid) return

		this.onTalk({
			$event:this.text
				})
	}
}


export let GravatarComponent={
	template,
	controller,
	bindings:{
		email:'<',
		onTalk:'&'
	}
}