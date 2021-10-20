export class Account{

    constructor(public username:string, public password:string)
    {
        this.username = username;
        this.password = password;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }
    

}