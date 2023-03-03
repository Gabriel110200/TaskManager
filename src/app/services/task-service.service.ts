import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { 

  }

  getTasks()
  {

    return this.http.get(this.apiUrl)

  }
}
