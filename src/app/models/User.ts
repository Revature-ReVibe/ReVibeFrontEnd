export class User{

    constructor(public username:string, public name:string,  public email:string,
                public profilePic:string, public userId:number, public password?:string)
    {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePic = profilePic;
        this.userId = userId;
    }

    getUsername(){
        return this.username;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }
    getProfilePic(){
        return this.profilePic;
    }
    getUserId(){
        return this.userId;
    }
}