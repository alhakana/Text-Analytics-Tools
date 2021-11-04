import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../log.service";
import {Languages} from "../model";

@Component({
  selector: 'app-languagedetection',
  templateUrl: './languagedetection.component.html',
  styleUrls: ['./languagedetection.component.css']
})
export class LanguagedetectionComponent implements OnInit {

  public languages: Languages;
  public print: boolean = false

  constructor(
    private httpClient: HttpClient,
    private logService: LogService
  ) {
    this.languages = new Languages("0",0,"0","0",[]);
  }

  ngOnInit(): void {}

  apiRequest(): void {
    let text = (<HTMLInputElement>document.getElementById("textArea")).value
    let element = <HTMLInputElement> document.getElementById("clean");
    let isClean = element.checked;

    console.log("Clean: " + isClean)

    let request = "https://api.dandelion.eu/datatxt/li/v1/?text=" + text;
    request += '&clean=' + isClean + '&token=' + localStorage.getItem("token")

    this.httpClient.get<any>(request).subscribe(response => {
        console.log("response: " + response)

        this.languages = response
        this.print = true

        let log = '[' + response.timestamp + ']' + " | GET " + request;
        this.logService.addToList(log)
      }
    )

  }
}
