import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private pageData: any;

  constructor() { }


  setPageData(data: any): void {
    this.pageData = data;
  }

  getPageData(): any {
    return this.pageData;
  }
  
}
