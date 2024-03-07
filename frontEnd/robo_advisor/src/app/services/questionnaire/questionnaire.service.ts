import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { questionnaireData } from '../../models/interfaces/Questionnaire';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private apiUrl1 = 'http://localhost:5000/gemini_service';

  constructor(private http: HttpClient) {}

  submitQuestions(questionnaireData: questionnaireData): Observable<any[]>{

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

    const requestOptions = {
      headers: headers,
      mode: "no-cors",
    };

    console.log('Request Payload:', questionnaireData);

    return this.http.post<any[]>(`${this.apiUrl1}`, questionnaireData, requestOptions);

    // Combine and return the observables
  }
}

  
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { questionnaireData } from '../../models/interfaces/Questionnaire';
// import { Observable } from 'rxjs';
// import { forkJoin } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class QuestionnaireService {

//   private apiUrl1 = 'http://localhost:8080/api/questionnaires';
//   private apiUrl2 = 'http://localhost:8080/api/questionnaires';

//   constructor(private http: HttpClient) {}

//   getDatabaseResponse(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl1}`);
//   }

//   submitQuestions(questionnaireData: questionnaireData): Observable<any[]> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//     });
//     console.log('Request Payload:', questionnaireData);

//     // Create two requests, one for each API URL
//     const request1 = this.http.post<any[]>(`${this.apiUrl1}`, questionnaireData, { headers });
//     const request2 = this.http.post<any[]>(`${this.apiUrl2}`, questionnaireData, { headers });

//     // Combine and return the observables
//     return forkJoin([request1, request2]);
//   }
    
//   }