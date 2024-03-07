import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css',
})
export class SubmitComponent {
  @Output() submit = new EventEmitter<void>();
  @Input() isLoading!: boolean

  onSubmitEvent(): void {
    this.submit.emit();
  }
}
