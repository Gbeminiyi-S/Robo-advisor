import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormQuestionsData } from '../../models/FormQuestionsData';
import { FormQuestions } from '../../models/interfaces/formQuestions';
import { NgClass } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RoundProgressModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  currentQuestion = 0;
  questions: FormQuestions[] = FormQuestionsData;
  myForm: FormGroup;
  isChecked: boolean[] = Array(this.questions.length).fill(false);

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
    this.questions.forEach((_question, i) => {
      this.myForm.addControl(`question${i}`, this.fb.control(''));
    });
  }

  onChange(event: Event) {
    const newVal = (event.target as HTMLInputElement).checked;
    const questionIndex = this.currentQuestion;
    this.isChecked[questionIndex] = newVal;
  }

  nextQuestion() {
    const questionIndex = this.currentQuestion;
    if (this.isChecked[questionIndex]) {
      this.currentQuestion++;
    }
  }

  previousQuestion() {
    const questionIndex = this.currentQuestion;
    if (this.isChecked[questionIndex]) {
      this.currentQuestion--;
    }
  }

  submitForm() {
    console.log(this.myForm.value);
  }
}
