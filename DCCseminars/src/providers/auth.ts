import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {
	contructor( http: Http) {
		console.log( 'Hello Auth Provider');
	}

	login(){

		return(true);
	}

}
