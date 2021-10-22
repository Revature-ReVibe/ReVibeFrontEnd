// This typescript file is so that we can keep things that might change. 
// Like urls depending on if we are testing on localhost or in the S3 bucket.

export class RefrenceSheet{
    private static url = "http://localhost:8080";

    static getUrl(){
        return this.url;
    }
}