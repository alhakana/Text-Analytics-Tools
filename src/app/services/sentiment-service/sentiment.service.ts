import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../../log.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  apiUrl: string = 'https://api.dandelion.eu/datatxt/sent/v1/';

  constructor(private httpClient: HttpClient,
              private logService: LogService) {
  }

  analyzeSentiment(text: string, language: string): Observable<any> {
    let token = localStorage.getItem("token")
    let url = `${this.apiUrl}?text=${text}&lang=${language}&token=${token}`

    this.logService.addToList(new Date() + "GET" + url)

    return this.httpClient.get<any>(url)
  }
}
