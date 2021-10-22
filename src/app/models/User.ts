export class User{

    constructor(public username:string, public password:string, private _token?:string)
    {
        this.username = username;
        this.password = password;
        this._token=_token;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }
    get Token(){
        return this._token;
    }
}