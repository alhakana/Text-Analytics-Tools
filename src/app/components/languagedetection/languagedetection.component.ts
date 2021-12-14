import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../../log.service";
import {Languages} from "../../model";
import {LanguageDetectionService} from "../../services/language-detection-service/language-detection.service";

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
    private logService: LogService,
    private languageDetectionService: LanguageDetectionService
  ) {
    this.languages = new Languages("0",0,"0","0",[]);
  }

  ngOnInit(): void {}

  apiRequest(): void {
    let text = (<HTMLInputElement>document.getElementById("textArea")).value
    let element = <HTMLInputElement> document.getElementById("clean");
    let isClean = element.checked;

    this.languageDetectionService.detectLanguage(text, isClean).subscribe((response) => {
        this.languages = response
        this.print = true
      }
    )

  }
}
