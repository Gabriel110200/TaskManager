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
  
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);

  }

  Delete(id)
  {
    this.taskService.deleteTasks(id).subscribe(()=> 
    this.tasks = this.tasks.filter(t => t.id !== id)
    );

  }

  onToggle(task)
  {
    task.reminder = !task.reminder;

  }

}
