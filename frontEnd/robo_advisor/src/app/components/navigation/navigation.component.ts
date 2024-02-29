import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  @Input() currentQuestion: number =0;
  @Input() totalQuestions: number =0;

  @Output() previousClick = new EventEmitter<void>();
  @Output() nextClick = new EventEmitter<void>();

  onPreviousClick(): void{
    this.previousClick.emit();
  }
  onNextClick(): void{
    this.nextClick.emit();
  }
}
