import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LogService} from "../../log.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  apiUrl: string = 'https://api.dandelion.eu/datatxt/li/v1/';

  constructor(private httpClient: HttpClient,
              private logService: LogService) {
  }

  detectLanguage(text: string, clean: boolean): Observable<any> {
    let token = localStorage.getItem("token");
    let url = `${this.apiUrl}?text=${text}&clean=${clean}&token=${token}`

    this.logService.addToList(new Date() + " GET " + url)

    return this.httpClient.get<any>(url)
  }
}
