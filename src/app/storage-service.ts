import { Injectable } from '@angular/core';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveData(key: string, title: string) {
    localStorage.setItem(key, title);
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  public getLength() {
    return localStorage.length;
  }

  public getSpecificKey(index:number) {
    return localStorage.key(index);
  }

  public getAllKeys() {
    let allKeys:Array<string> = [];
    for(var i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if(key != null && key != "debug") {
        allKeys.push(key);
      }
    }
    return allKeys;
  }
}
