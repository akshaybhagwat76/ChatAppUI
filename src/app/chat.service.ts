import { EventEmitter, Injectable, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';          // import signalR
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MessageDto } from './Dto/MessageDto';
import { LogLevel } from '@microsoft/signalr';
import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messageReceived = new EventEmitter<MessageDto>();
  connectionEstablished = new EventEmitter<Boolean>();  
  
  private connectionIsEstablished = false;
  private _hubConnection: HubConnection; 
  //  private connection: any = 
  //  readonly POST_URL = "https://localhost:44307/api/chat/send"
  connectionEstablished$ = new BehaviorSubject<boolean>(false);
   
  // private receivedMessageObject: MessageDto = new MessageDto();
  // private sharedObj = new Subject<MessageDto>();

  constructor(private http: HttpClient) { 
  //   this.connection.onclose(async () => {
  //     await this.start();
  //   });
  //  this.connection.on("ReceiveOne", (user, message) => { this.mapReceivedMessage(user, message); });
  //  this.start(); 
  this.createConnection();  
  this.registerOnServerEvents();  
  this.startConnection();                 
  }
  sendMessage(message: MessageDto) {  
    debugger
    this._hubConnection.invoke('NewMessage',message);  
  }  
  private createConnection(): void{
    this._hubConnection =new signalR.HubConnectionBuilder().withUrl("https://localhost:44307/chathub")   // mapping to the chathub as in startup.cs
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
    .build();
  }
  private registerOnServerEvents(): void{
    this._hubConnection.on('MessageReceived', (data: any) => {  
      this.messageReceived.emit(data);  
    }); 
  }
  private startConnection(): void{
    this._hubConnection  
    .start()  
    .then(() => {  
      this.connectionIsEstablished = true;  
      console.log('Hub connection started');  
      this.connectionEstablished.emit(true);  
    })  
    .catch(err => {  
      console.log('Error while establishing connection, retrying...');  
      setTimeout(function () { this.startConnection(); }, 5000);  
    });  
  }
  // Strart the connection
  // public async start() {
  //   try {
  //     await this.connection.start();
  //     console.log("connected");
  //   } catch (err) {
  //     console.log(err);
  //     setTimeout(() => this.start(), 5000);
  //   } 
  // }

//   private mapReceivedMessage(user: string, message: string): void {
//     this.receivedMessageObject.clientuniqueid = user;
//     this.receivedMessageObject.message = message;
//     this.sharedObj.next(this.receivedMessageObject);
//  }

  /* ****************************** Public Mehods **************************************** */

  // Calls the controller method
  // public broadcastMessage(msgDto: any) {
  //   this.http.post(this.POST_URL, msgDto).subscribe(data => console.log(data));
  //   // this.connection.invoke("SendMessage1", msgDto.user, msgDto.msgText).catch(err => console.error(err));    // This can invoke the server method named as "SendMethod1" directly.
  // }

  // public retrieveMappedObject(): Observable<MessageDto> {
  //   return this.sharedObj.asObservable();
  // }
 

}