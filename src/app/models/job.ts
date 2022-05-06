export class Job {

        id: string;
        Email: string;
         Title: string ;
         Location: string ;
         Type: string ;
         //Category: string ;
         Tags: string ;
         Description: string ;
         Closing_Date: string ;
         Company_Details: string ;
         Company_Name: string ;
         Website:string;
         Twitter_Username:string 
         userId:string

    constructor( id: string,
        userId:string,
        Email: string,
         Title: string ,
         Location: string ,
         Type: string ,
        // Category: string ,
         Tags: string ,
         Description: string ,
         Closing_Date: string ,
         Company_Details: string ,
         Company_Name: string ,
         Website:string,
         Twitter_Username:string )
    {
        this.userId=userId;
        this.id=id;
        this.Email=Email;
        this.Title=Title ;
        this.Location=Location ;
        this.Type=Type ;
        //this.Category=Category ;
        this.Tags=Tags ;
        this.Description=Description ;
        this.Closing_Date=Closing_Date ;
         this.Company_Details=Company_Details ;
         this.Company_Name=Company_Name ;
         this.Website=Website;
         this.Twitter_Username=Twitter_Username 
    }
}