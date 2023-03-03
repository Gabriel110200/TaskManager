import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskServiceService } from 'src/app/services/task-service.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 
  faTimes = faTimes;
  tasks: any
  constructor(private taskService:TaskServiceService) { }

  ngOnInit(): void {

    this.tasks = this.taskService.getTasks();

  }

  Delete(item)
  {
      alert("trying to delete");

  }

}
