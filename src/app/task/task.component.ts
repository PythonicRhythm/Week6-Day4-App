import { Component, Input, OnInit, Output } from '@angular/core';
import { StorageService } from '../storage-service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  title = '';
  tasks:Array<string> = [];

  constructor(private storage: StorageService) {
  }

  getTask(id:string) {
    let data:any = this.storage.getData(id);
    return JSON.parse(data);
  }

  createTask() {
    if(this.title == '') return;
    let data = {id: Date.now(), taskTitle: this.title, completed: false};
    this.storage.saveData(data.id.toString(), JSON.stringify(data))
    this.tasks.push(data.id.toString());
  }

  markTask(id:string) {
    let stringData = this.storage.getData(id);
    if(stringData != null){
      let data = JSON.parse(stringData);
      console.log(data.completed);
      data.completed = true;
      this.deleteTask(id);
      this.storage.saveData(data.id.toString(), JSON.stringify(data));
      this.tasks.push(data.id.toString());
    }
  }

  onTitleChange(event:any) {
    this.title = event.target.value;
  }

  deleteTask(id:string) {
    this.storage.removeData(id);
    this.tasks = this.tasks.filter(task => task != id);
  }
}
