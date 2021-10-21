export class baseURL{
private static url:string = "http://localhost:8080/";

    static getUrl(): string{
           return this.url;
    }
}