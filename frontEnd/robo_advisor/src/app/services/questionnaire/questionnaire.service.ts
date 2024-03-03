import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { questionnaireData } from '../../models/interfaces/Questionnaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  constructor(private http: HttpClient) {}

  submitQuestions(questionnaireData: questionnaireData): Observable<any> {
    return this.http.post(
      'localhost:8080/api/questionnaires',
      questionnaireData,
    );
  }
}
