import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiServerUrl='http://localhost:8088'

  constructor(private http:HttpClient) {}

  public getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(`${this.apiServerUrl}/events/all`);
  }
  
  
}
