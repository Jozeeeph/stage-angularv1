import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interface/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiServerUrl="http://localhost:8088";

  constructor(private Http:HttpClient) { }

  public getContacts():Observable<Contact[]>{
    return this.Http.get<Contact[]>(`${this.apiServerUrl}/contact/all`);
  }

  public addContact(contact:any):Observable<Contact>{
    console.log(contact);
    
    return this.Http.post<Contact>(`http://localhost:8088/contact/add`,contact);
  }

  public updateContact(contact:Contact):Observable<Contact>{
    return this.Http.put<Contact>(`${this.apiServerUrl}/contact/update`,contact);
  }

  public deleteContact(contactId:number):Observable<void>{
    return this.Http.delete<void>(`${this.apiServerUrl}/contact/delete/${contactId}`);
  }

}
