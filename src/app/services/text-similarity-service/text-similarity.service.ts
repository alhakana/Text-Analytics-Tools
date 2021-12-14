import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../../log.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  apiUrl: string = 'https://api.dandelion.eu/datatxt/sim/v1/?text1=';

  constructor(private httpClient: HttpClient,
              private logService: LogService) {
  }

  testSimilarity(text1: string, text2: string): Observable<any> {
    let token = localStorage.getItem("token")
    let url = `${this.apiUrl}?text1=${text1}&text2=${text2}&token=${token}`

    this.logService.addToList(new Date() + "GET" + url)

    return this.httpClient.get<any>(url)
  }


}
