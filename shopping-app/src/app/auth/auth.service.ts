import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private _isLoggedIn : boolean = false;
    private _loggedInUserRole : string = '';
    private _successUrl : string = 'home';

    authenticate(userName : string,password : string):boolean{        
        if(userName === 'keyur27' && password === 'denish'){
            this._isLoggedIn = true;
            this._loggedInUserRole = 'ADMIN';
        }else if(userName === 'denish26' && password === 'keyur'){
            this._isLoggedIn = true;
            this._loggedInUserRole = 'USER';
        }
        return this._isLoggedIn;
    }

    public set isLoggedIn(_isLoggedIn : boolean){
        this._isLoggedIn = _isLoggedIn;
    }

    public get isLoggedIn(){
        return this._isLoggedIn;
    }

    public set loggedInUserRole(_loggedInUserRole : string) {
        this._loggedInUserRole = _loggedInUserRole;
    }

    public get loggedInUserRole(){
        return this._loggedInUserRole;
    }

    public set successUrl(_successUrl : string) {
        this._successUrl = _successUrl;
    }

    public get successUrl() {
        return this._successUrl;
    }
}   