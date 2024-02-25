import { Component, Input } from '@angular/core';
import { FormQuestions } from '../../models/interfaces/formQuestions';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() question: FormQuestions[] | undefined;

  

}
