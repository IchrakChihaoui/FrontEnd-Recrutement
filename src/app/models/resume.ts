export class Resume {
    _id:string;
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

    constructor(_id:string, CandidatId:string ,Name:string,Email:string,Title:string,Location:string, ResumeContent:string, Education:string,Experience:string, Photo:string,video:string,Url:string)
    {
        this._id=_id,
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