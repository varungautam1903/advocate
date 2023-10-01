import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  url: string = '/assets/data/data.json';

  constructor(private http: HttpClient) { }

  getCases() {
    return this.http.get(this.url);
  }

}
