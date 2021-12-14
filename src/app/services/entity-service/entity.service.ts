import { Injectable } from '@angular/core';
import {LogService} from "../../log.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  apiUrl: string = 'https://api.dandelion.eu/datatxt/nex/v1/?lang=en&text=';

  constructor(private httpClient: HttpClient,
              private logService: LogService) {
  }

  extractEntities(text: string, minConfidence: number, include: string[]): Observable<any> {
    let token = localStorage.getItem("token");
    let url = `${this.apiUrl}?text=${text}&min_confidence=${minConfidence}&include=${include}&token=${token}`

    this.logService.addToList(new Date() + "GET" + url)

    return this.httpClient.get<any[]>(url)
  }
}
