import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
private url = 'http://localhost:8080';
private socket;

public sendMessage(message) {
  this.socket.emit('add-message', message);
}

  constructor() {
    if (!this.socket) {
      this.socket = io(this.url);
    }
  }

}
