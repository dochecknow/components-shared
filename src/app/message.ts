export class Message {
    public id: string;
    public idChat: string;
    public txt: string;
    public sentByTime: number;
    public sentById: string;
    public sentByName: string;
    public sentByImage: string;
     constructor(
         id: string,
         idChat: string,
         txt: string,
         sentByTime: number,
         sentById: string,
         sentByName: string,
         sentByImage: string,
         ) {
             this.id = id;
             this.idChat = idChat;
             this.txt = txt;
             this.sentByTime = sentByTime;
             this.sentById = sentById;
             this.sentByName = sentByName;
             this.sentByImage = sentByImage;

         }
 }
