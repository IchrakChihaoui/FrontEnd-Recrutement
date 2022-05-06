export class Resume {
   CandidatId:string;
    Name:string;
	Email:string;
    Title:string;
    Location:string;
    ResumeContent:string;
    Education:string;
    Experience:string;
    //Photo:string;
    //video:string;
    Url:string

    constructor(CandidatId:string ,Name:string,Email:string,Title:string,Location:string, ResumeContent:string, Education:string,Experience:string, Photo:string,video:string,Url:string)
    {
        this.Name=Name,
        this.Email=Email
        this.Title=Title
        this.Location=Location
        this.ResumeContent=ResumeContent
        this.Education=Education
        this.Experience=Experience
        this.CandidatId=CandidatId
        //this.Photo=Photo
        //this.video=video
        this.Url=Url





        

        

    }
}