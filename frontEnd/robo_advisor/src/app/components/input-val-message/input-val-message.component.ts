import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-val-message',
  standalone: true,
  imports: [],
  templateUrl: './input-val-message.component.html',
  styleUrl: './input-val-message.component.css'
})
export class InputValMessageComponent {
  @Input() attemptedToNavigate! : boolean;
  @Input() currentQuestion! : number;
  @Input() formControlValue! : any;
}
