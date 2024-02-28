import { Component, Input } from '@angular/core';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { FormQuestions } from '../../models/interfaces/formQuestions';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [RoundProgressModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css',
})
export class ProgressComponent {
  @Input() currentQuestion: number = 0;
  @Input() totalQuestions: number = 0;
}
