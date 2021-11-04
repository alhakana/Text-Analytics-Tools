import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../log.service";
import {SentimentValue} from "../model";

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  public sentimentValue: SentimentValue;
  public primaryLanguage: string = "en";
  public print: boolean = false;

  public colorRGB: string = "";

  constructor(
    private httpClient: HttpClient,
    private logService: LogService
  ) {
    this.sentimentValue = new SentimentValue(0,"en")
  }

  ngOnInit(): void {
  }

  apiRequest(): void {
    let request = 'https://api.dandelion.eu/datatxt/sent/v1/?lang=' + this.primaryLanguage;
    let text = (<HTMLInputElement>document.getElementById("textArea")).value;
    request+='&text=' + text + '&token=' + localStorage.getItem("token");

    this.httpClient.get<any>(request).subscribe(response => {
        this.sentimentValue = response.sentiment;


        this.colorRGB = this.makeColor((this.sentimentValue.score+ 1)/2)

        this.print = true;

        let log = '[' + response.timestamp + ']' + " | GET " + request
        this.logService.addToList(log)
      }
    )
  }


  makeColor(t: number): string {
    const red = 190 + (57 - 190) * t
    const green = 37 + (228 - 37) * t

    return 'rgb(' + red + ',' + green + ',0)'
  }

}
