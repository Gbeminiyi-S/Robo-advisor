import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormQuestionsData } from '../../models/FormQuestionsData';
import { FormQuestions } from '../../models/interfaces/formQuestions';
import { NgClass } from '@angular/common';
import { InputValMessageComponent } from '../../components/input-val-message/input-val-message.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { SubmitComponent } from '../../components/submit/submit.component';
import { UserDetailsService } from '../../services/user-details/user-details.service';

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
export class FormComponent implements OnInit{
  currentQuestion = 0;
  questions: FormQuestions[] = FormQuestionsData;
  myForm: FormGroup;
  isChecked: boolean[] = Array(this.questions.length).fill(false);
  attemptedToNavigateFlags: boolean[] = Array(this.questions.length).fill(
    false
  );
  ageVal: number = 0;
  username: string | null = null;


  constructor(private fb: FormBuilder, private userDetails: UserDetailsService) {
    this.myForm = this.fb.group({});
    this.questions.forEach((_question, i) => {
      this.myForm.addControl(`question${i}`, this.fb.control(''));
      
    });
  }

  ngOnInit(): void {
    this.username =this.userDetails.getUsername()
  }

  onChange(event: Event) {
    const newVal = (event.target as HTMLInputElement).checked;
    this.ageVal = Number((event.target as HTMLInputElement).value);
    this.isChecked[this.currentQuestion] = newVal;
  }

  // nextQuestion() {
  //   if (this.currentQuestion === 0) {
  //     if (this.isChecked[this.currentQuestion] || this.ageVal) {
  //       this.attemptedToNavigateFlags[this.currentQuestion] = false;
  //       this.currentQuestion++;
  //     } else {
  //       this.attemptedToNavigateFlags[this.currentQuestion] = true;
  //     }
  //   } else {
  //     if (this.isChecked[this.currentQuestion]) {
  //       this.attemptedToNavigateFlags[this.currentQuestion] = false;
  //       this.currentQuestion++;
  //     } else {
  //       this.attemptedToNavigateFlags[this.currentQuestion] = true;
  //     }
  //   }
  // }
  nextQuestion() {
    const currentQuestionData = this.questions[this.currentQuestion];
    const formControl = this.myForm.get(`question${this.currentQuestion}`);

    if (currentQuestionData.id === 3 || currentQuestionData.id === 6 || currentQuestionData.id === 8) {
      // Validate input fields
      if (formControl?.valid) {
        this.attemptedToNavigateFlags[this.currentQuestion] = false;
        this.currentQuestion++;
      } else {
        this.attemptedToNavigateFlags[this.currentQuestion] = true;
      }
    } else {
      // Handle navigation for radio button questions
      if (formControl?.value) {
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

  // submitForm() {
  //   if (this.isChecked[this.currentQuestion]) {
  //     this.attemptedToNavigateFlags[this.currentQuestion] = false;
  //     console.log(this.myForm.value);
  //   } else {
  //     this.attemptedToNavigateFlags[this.currentQuestion] = true;
  //   }
  // }
  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
}
