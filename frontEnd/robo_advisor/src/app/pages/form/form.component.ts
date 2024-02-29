import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormQuestionsData } from '../../models/FormQuestionsData';
import { FormQuestions } from '../../models/interfaces/formQuestions';
import { NgClass } from '@angular/common';
import { InputValMessageComponent } from '../../components/input-val-message/input-val-message.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { SubmitComponent } from '../../components/submit/submit.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    InputValMessageComponent,
    ReactiveFormsModule,
    NgClass,
    ProgressComponent,
    NavigationComponent,
    SubmitComponent,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  currentQuestion = 0;
  questions: FormQuestions[] = FormQuestionsData;
  myForm: FormGroup;
  isChecked: boolean[] = Array(this.questions.length).fill(false);
  attemptedToNavigateFlags: boolean[] = Array(this.questions.length).fill(
    false
  );
  ageVal: number = 0;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
    this.questions.forEach((_question, i) => {
      this.myForm.addControl(`question${i}`, this.fb.control(''));
    });
  }

  onChange(event: Event) {
    const newVal = (event.target as HTMLInputElement).checked;
    this.ageVal = Number((event.target as HTMLInputElement).value);
    this.isChecked[this.currentQuestion] = newVal;
  }

  nextQuestion() {
    if (this.currentQuestion === 0) {
      if (this.isChecked[this.currentQuestion] || this.ageVal) {
        this.attemptedToNavigateFlags[this.currentQuestion] = false;
        this.currentQuestion++;
      } else {
        this.attemptedToNavigateFlags[this.currentQuestion] = true;
      }
    } else {
      if (this.isChecked[this.currentQuestion]) {
        this.attemptedToNavigateFlags[this.currentQuestion] = false;
        this.currentQuestion++;
      } else {
        this.attemptedToNavigateFlags[this.currentQuestion] = true;
      }
    }
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  submitForm() {
    if (this.isChecked[this.currentQuestion]) {
      this.attemptedToNavigateFlags[this.currentQuestion] = false;
      console.log(this.myForm.value);
    } else {
      this.attemptedToNavigateFlags[this.currentQuestion] = true;
    }
  }
}
