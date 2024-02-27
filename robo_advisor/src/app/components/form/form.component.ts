import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormQuestionsData } from '../../models/FormQuestionsData';
import { FormQuestions } from '../../models/interfaces/formQuestions';
import { NgClass } from '@angular/common';
import { ProgressComponent } from '../progress/progress.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { SubmitComponent } from '../submit/submit.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, ProgressComponent, NavigationComponent, SubmitComponent],
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
    if (this.isChecked[this.currentQuestion]) {
      this.attemptedToNavigateFlags[this.currentQuestion]= false;
      console.log(this.myForm.value);
    } else{
      this.attemptedToNavigateFlags[this.currentQuestion]= true;
    }
  }
}
