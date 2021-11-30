import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ChatService } from 'src/app/chat.service';
import { MessageDto } from 'src/app/Dto/MessageDto';
import { Services } from 'src/app/Services';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  displayView: number = 1;
  data: string;
  Id: number;
  lists: any;
  ChattingList: any;
  MessageList: any;
  tmpClientId :number = 0;
  txtMessage: string = '';
  message = new MessageDto();
  messages = Array<MessageDto>();
  uniqueID: string = new Date().getTime().toString();
  chatmessages = [];

  constructor(public route: ActivatedRoute, private _Service: Services, private chatService: ChatService, private _ngZone: NgZone,
    ) {
    this.subscribeToEvents();
  }

  ngOnInit(): void {

    debugger

    this.data = "Manoj";
    this.Id = 3;
    this.chatService.messageReceived.subscribe((message) => {
      this.chatmessages = [...this.chatmessages, message];
    });
    this._Service.GetMessages(this.Id).subscribe(result => {
      debugger
      this.ChattingList = result;
    });
    // this.route.queryParams.subscribe(params => {
    //   console.log("Manoj",params.Name);
    //   });

  }
  //  SendMessage(){
  //    debugger
  //    var tmp = (<HTMLInputElement>document.getElementById("Message")).value;

  //    this.lists={chatId:0,CustomerId:+this.Id,employeeId:0,Message:tmp,file:null};
  //    this._Service.SendMessages(this.lists).subscribe(result => {
  //     (<HTMLInputElement>document.getElementById("Message")).value=null;
  //     this.ngOnInit();
  //     //this.results=result;
  //   });
  //  }
  SendMessage(): void {
    debugger
    this.txtMessage = (<HTMLInputElement>document.getElementById("txtMessage")).value;
    if (this.txtMessage) {
      this.message = new MessageDto();
      this.message.chatid  =this.uniqueID.toString();
      this.message.message = this.txtMessage;
      this.message.type = "sent";
      this.message.clientId = this.tmpClientId;
      this.message.EmployeeId = 3;
      this.messages.push(this.message);
      this.chatService.sendMessage(this.message);
      (<HTMLInputElement>document.getElementById("txtMessage")).value = null;

      //Save Into Database 
      // this.lists = { chatId: 0, CustomerId: +this.Id, employeeId: 0, Message: this.txtMessage, file: null };
      // this._Service.SendMessages(this.lists).subscribe(result => {
      //   (<HTMLInputElement>document.getElementById("txtMessage")).value = null;
      //   this.ngOnInit();
      //   //this.results=result;
      // });
      this.txtMessage = '';

    }

  }
  private subscribeToEvents(): void {

    this.chatService.messageReceived.subscribe((message: MessageDto) => {
      debugger
        if (message.chatid !== this.uniqueID) {
          this.messages=[];
          message.type = "received";
          this.messages.push(message);
        }
    });
  }
  showmessage(value){
    debugger
    this.tmpClientId=value;
    this._Service.GetCustomerAllMsg(value).subscribe(result => {
      debugger
      this.MessageList = result;
    });
  }
  ngOnDestroy(): void { }
}
