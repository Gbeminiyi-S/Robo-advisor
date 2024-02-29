import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css',
})
export class SubmitComponent {
  @Output() submit = new EventEmitter<void>();

  onSubmitEvent(): void {
    this.submit.emit();
  }
}
