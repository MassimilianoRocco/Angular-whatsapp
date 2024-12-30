import { Component, Input } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-card',
  standalone:false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() user!:User;
}
