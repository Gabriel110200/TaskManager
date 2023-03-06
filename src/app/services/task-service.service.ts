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
   
     return this.http.get(this.apiUrl);

  }

  deleteTasks(id)
  {
    console.log(id)
    return this.http.delete(this.apiUrl + '/' + id)
  }

  addTasks(task)
  {
    // return this.http.post(this.apiUrl)
  }
}
