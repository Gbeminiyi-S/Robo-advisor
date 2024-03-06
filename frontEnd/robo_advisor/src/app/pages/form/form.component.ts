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
import { QuestionnaireService } from '../../services/questionnaire/questionnaire.service';
import { response } from 'express';
import { error } from 'console';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

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
    NavbarComponent,
    HomepageComponent,
    RouterLinkActive, RouterLink,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  currentQuestion = 0;
  questions: FormQuestions[] = FormQuestionsData;
  myForm: FormGroup;
  isChecked: boolean[] = Array(this.questions.length).fill(false);
  attemptedToNavigateFlags: boolean[] = Array(this.questions.length).fill(
    false,
  );
  inputNumValue: number = 0;
  inputStrValue: string = '';
  username: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userDetails: UserDetailsService,
    private questionnaireService: QuestionnaireService,
    private router: Router,
  ) {
    this.myForm = this.fb.group({});
    this.questions.forEach((_question, i) => {
      this.myForm.addControl(`${_question.name}`, this.fb.control(''));
    });
  }

  ngOnInit(): void {
    this.username = this.userDetails.getUsername();
  }

  onChange(event: Event) {
    const newVal = (event.target as HTMLInputElement).checked;
    this.inputNumValue = Number((event.target as HTMLInputElement).value);
    if ((event.target as HTMLInputElement).type === 'text')
      this.inputStrValue = String((event.target as HTMLInputElement).value);
    this.isChecked[this.currentQuestion] = newVal;
  }

  nextQuestion() {
    if (
      this.currentQuestion === 0 ||
      this.currentQuestion === 2 ||
      this.currentQuestion === 5 ||
      this.currentQuestion === 7
    ) {
      if (
        this.isChecked[this.currentQuestion] ||
        this.inputNumValue ||
        this.inputStrValue
      ) {
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
    if (this.inputStrValue) {
      if (this.myForm.valid) {
        this.questionnaireService.submitQuestions(this.myForm.value).subscribe(
          (response) => {
            console.log('posted succesfully', response);
            this.router.navigate(['/dashboard']);
          },
          (error) => {
            console.log('error', error);
            this.router.navigate(['/dashboard']);
          },
        );
      } else {
        console.log('invalid form');
      }
    } else {
      this.attemptedToNavigateFlags[this.currentQuestion] = true;
    }
  }
}
