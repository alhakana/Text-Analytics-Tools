import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../../log.service";
import {SentimentValue} from "../../model";
import {SentimentService} from "../../services/sentiment-service/sentiment.service";

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css'],
})
export class SentimentComponent implements OnInit {

  public sentimentValue: SentimentValue;
  public language: string = "en";
  public print: boolean = false;

  public colorRGB: string = "";

  constructor(
    private httpClient: HttpClient,
    private logService: LogService,
    private sentimentService: SentimentService
  ) {
    this.sentimentValue = new SentimentValue(0,"en")
  }

  ngOnInit(): void {
  }

  apiRequest(): void {
    let text = (<HTMLInputElement>document.getElementById("textArea")).value;

    this.sentimentService.analyzeSentiment(text, this.language).subscribe((response) => {
        this.sentimentValue = response.sentiment;
        this.colorRGB = this.makeColor((this.sentimentValue.score+ 1)/2)
        this.print = true;
      }
    )
  }

  makeColor(t: number): string {
    const red = 190 + (57 - 190) * t
    const green = 37 + (228 - 37) * t

    return 'rgb(' + red + ',' + green + ',0)'
  }

  selectedRadioButtonValue(value: string) {
    this.language = value
  }

}
