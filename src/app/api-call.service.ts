import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'enviroments/enviroments';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }
  
  sendMessage(post: any): Observable<any> {
    return this.http.post<any>(`${environment.apiEndpoint}/posts`, post);
  }
  register(post: any): Observable<any> {
    return this.http.post<any>(`${environment.apiEndpoint}/register`, post);
  }
}
