export class User {
    _id:string;
    mail: string;
    password: string 

    constructor(mail:string,password:string)
    {
        this.mail=mail,
        this.password=password
    }
}
