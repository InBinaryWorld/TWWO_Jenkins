import { Component } from '@angular/core';
import { MessageForm } from './model/MessageForm';
import { Message } from './model/Message';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diploma-project';

  messages: Message[] = []
  newMessage: MessageForm = new MessageForm();

  constructor(private messageService: MessageService) {
    this.reloadMessages();
  }

  addMessage() {
    this.messageService.addMessage(this.newMessage).subscribe(savedMessage => {
      this.messages.push(savedMessage)
      this.newMessage = new MessageForm();
    });
  }

  deleteMessage(message: Message) {
    this.messageService.deleteMessage(message.id).subscribe(() => {
      this.messages.splice(this.messages.indexOf(message), 1)
    });
  }

  private reloadMessages() {
    this.messageService.getMessages().subscribe(newMessages => {
      this.messages = newMessages
    });
  }

}
