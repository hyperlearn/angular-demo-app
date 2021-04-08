import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // messages: string[] = []
  @Input() msg: string;

  constructor(private messageService: MessageService) { }

  getMessages() {
    return this.messageService.messages;
  }

  reset() {
    this.messageService.clear()
    this.messageService.addMessage("Just Cleared!");
  }

  ngOnInit(): void {
    this.getMessages()
  }

}
