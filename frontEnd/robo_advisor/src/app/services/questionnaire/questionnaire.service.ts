import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { questionnaireData } from '../../models/interfaces/Questionnaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private apiUrl = 'http://localhost:8080/api/questionnaires';

  constructor(private http: HttpClient) {}

  getDatabaseResponse(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  submitQuestions(questionnaireData: questionnaireData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
  });
  console.log('Request Payload:', questionnaireData);

    return this.http.post<any>(
      `${this.apiUrl}`,
      questionnaireData,
      { headers }
    );
  }
}
