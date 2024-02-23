import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormQuestionsData } from '../../models/FormQuestionsData';
import { FormQuestions } from '../../models/interfaces/formQuestions';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  currentQuestion = 0;
  questions: FormQuestions[] = FormQuestionsData;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
    this.questions.forEach((question, i) => {
      this.myForm.addControl(`question${i}`, this.fb.control(''));
    });
  }

  
  nextQuestion() {
    this.currentQuestion++;
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  submitForm() {
    console.log(this.myForm.value);
  }
}
