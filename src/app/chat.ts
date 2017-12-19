export class Chat {
   public id: string;
   public name: string;
   public description: string;
   public initiated: number;
   public lastTxtTime: number;
   public lastTxtId: string;
   public lastTxtName: string;
   public lastTxtImage: string;
   public txtCount: number;
    constructor(
        id: string,
        name: string,
        description: string,
        initiated: number,
        lastTxtTime: number,
        lastTxtId: string,
        lastTxtName: string,
        lastTxtImage: string,
        txtCount: number
        ) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.initiated = initiated;
            this.lastTxtTime = lastTxtTime;
            this.lastTxtId = lastTxtId;
            this.lastTxtName = lastTxtName;
            this.lastTxtImage = lastTxtImage;
            this.txtCount = txtCount;
        }
}
