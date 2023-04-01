import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetConversationService {

  constructor(private http: HttpClient) { }

  fetchFile(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'text' });
  }
  
}
