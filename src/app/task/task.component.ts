import { Component, Input } from '@angular/core';
import { StorageService } from '../storage-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() taskid: string = "";
  task:any;

  constructor(private storage: StorageService) {
  }

  ngOnInit() {
    this.task = this.getTask();
  }

  getTask() {
    let data:any = this.storage.getData(this.taskid);
    return JSON.parse(data);
  }
}
