import { Component, EventEmitter, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primo_test';
  user!:User;

  //Prendo l'user inviato dal left-box, lo salvo e lo invio al chat-box
  clickedOnUserList(user:User){
    this.user = user;
    this.sendClickedUser(this.user);
  }

  @Output() clickedUserToSend = new EventEmitter<User>()

  sendClickedUser(user:User){
    this.clickedUserToSend.emit(user);
  }
}
