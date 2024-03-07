import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private apiUrl = 'http://localhost:5000/gemini_response';

  constructor(private http: HttpClient) { }

  getChartInfo(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const requestOptions = {
      headers: headers,
      mode: "no-cors",
    };

    return this.http.get(`${this.apiUrl}`, requestOptions);
  }
}

// export class AdviceService {
//   private apiUrl = 'http://localhost:5000/gemini_service';

//   constructor(private http: HttpClient) { }

//   getChartInfo(): Observable<any> {
//     return this.http.get(`${this.apiUrl}`);
//   }