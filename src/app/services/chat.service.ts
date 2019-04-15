import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
private url = 'http://localhost:8080';
private socket;

public sendMessage(message) {
  this.socket.emit('add-message', message);
}
  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }

  constructor() {
    if (!this.socket) {
      this.socket = io(this.url);
    }
  }

}
