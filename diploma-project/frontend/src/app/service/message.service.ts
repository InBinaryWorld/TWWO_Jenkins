import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../model/Message';
import { MessageForm } from '../model/MessageForm';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private serverUrl = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get(`${this.serverUrl}/message`) as Observable<Message[]>
  }

  addMessage(form: MessageForm): Observable<Message> {
    return this.http.post(`${this.serverUrl}/message`, form) as Observable<Message>
  }

  deleteMessage(id: number): Observable<any> {
    return this.http.delete(`${this.serverUrl}/message/${id}`)
  }
}
