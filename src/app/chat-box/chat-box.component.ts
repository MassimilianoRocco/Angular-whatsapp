import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../user.model';
import { Message } from '../user.model';

@Component({
  selector: 'app-chat-box',
  standalone: false,
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent{

  @Input() targetUser!: User;


}
