import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormQuestionsData } from '../../models/FormQuestionsData';
import { FormQuestions } from '../../models/interfaces/formQuestions';
import { NgClass } from '@angular/common';
import { QuestionComponent } from '../question/question.component';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, QuestionComponent, ProgressComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  currentQuestion = 0;
  questions: FormQuestions[] = FormQuestionsData;
  myForm: FormGroup;
  isChecked: boolean[] = Array(this.questions.length).fill(false);
  attemptedToNavigateFlags: boolean[] = Array(this.questions.length).fill(false);

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
    this.questions.forEach((_question, i) => {
      this.myForm.addControl(`question${i}`, this.fb.control(''));
    });
  }

  onChange(event: Event) {
    const newVal = (event.target as HTMLInputElement).checked;
    this.isChecked[this.currentQuestion] = newVal;
  }

  nextQuestion() {
    if (this.isChecked[this.currentQuestion]) {
      this.attemptedToNavigateFlags[this.currentQuestion]= false;
      this.currentQuestion++;
    } else{
      this.attemptedToNavigateFlags[this.currentQuestion]= true;
    }
  }

  previousQuestion() {
      this.currentQuestion--;
  }

  submitForm() {
    console.log(this.myForm.value);
  }
}
