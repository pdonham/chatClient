import {Component} from '@angular/core';
import {ChatService} from './services/chat.service';
import {strictEqual} from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chatting';
  message: string;
  messages: any[] = []

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe( (message) => {
        this.messages.push(message);
      });
  }

}
