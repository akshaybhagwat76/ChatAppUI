export class MessageDto {
    public chatid: any;
    public type: string = '';
    // public message: string = '';
    // public date: string=new Date().toString();
    // public EmployeeId :number;
    // public CustomerId : number;
    // public file : number;
    
    public sent: string;
    public clientId: number;
    public message: string;
    public username : string;
    public email : string;
    public fullname : string;
    public EmployeeId :number;
    constructor() {
      this.sent = new Date().toISOString();
    }
    
}