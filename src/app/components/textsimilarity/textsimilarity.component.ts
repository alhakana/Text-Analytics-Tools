import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../../log.service";
import {Similarity} from "../../model";
import {TextSimilarityService} from "../../services/text-similarity-service/text-similarity.service";

@Component({
  selector: 'app-textsimilarity',
  templateUrl: './textsimilarity.component.html',
  styleUrls: ['./textsimilarity.component.css']
})

export class TextsimilarityComponent implements OnInit {

  public similarity: Similarity;
  public print: boolean = false

  constructor(
    private httpClient: HttpClient,
    private logService: LogService,
    private textSimilarityService: TextSimilarityService
  ) {
    this.similarity = new Similarity("0", 0,"0",0,"0","0","0","0",0)
  }

  ngOnInit(): void {
  }

  apiRequest(event: Event): void{
    let text1 = (<HTMLInputElement>document.getElementById("textArea1")).value;
    let text2 = (<HTMLInputElement>document.getElementById("textArea2")).value;

    this.textSimilarityService.testSimilarity(text1, text2).subscribe((response) => {
        this.similarity = response
        this.print = true
      }
    )
  }

}
