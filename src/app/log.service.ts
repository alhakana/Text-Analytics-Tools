import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LogService {

  private log: string[];

  constructor() {
    this.log = [];
  }

  addToList(request: string): void {
    this.log.push(request)
  }

  getList():string[] {
    return this.log;
  }

}
