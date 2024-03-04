import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }

  getChartInfo(): Observable<any> {
    return this.http.get('http://localhost:3000/response_list');
  }
}
