import { Component } from '@angular/core';
import { StorageService } from './storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Week6-Day4-App';
  session:any = '';
  tasks:Array<string> = [];

  constructor(private storage: StorageService) {
  }

  createTask() {
    let data = {id: Date.now(), taskTitle:"Have Fun!"};
    this.storage.saveData(data.id.toString(), JSON.stringify(data))
    this.tasks.push(data.id.toString());
  }

}
