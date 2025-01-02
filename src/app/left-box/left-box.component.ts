import { Component, EventEmitter, inject, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-left-box',
  standalone:false,
  templateUrl: './left-box.component.html',
  styleUrl: './left-box.component.css'
})
export class LeftBoxComponent {

  private usersService = inject(UsersService);

  myUser:User = this.usersService.getMyUser();
  userList:User[] = this.usersService.getAllUsers();

  @Output() onClick = new EventEmitter<User>();

  gestioneClick(user:User){
    this.onClick.emit(user);
  }
}
