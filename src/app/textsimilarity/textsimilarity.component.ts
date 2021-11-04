import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../log.service";

export class Sim{
  constructor(
    public timestamp: string,
    public time: number,
    public lang: string,
    public langConfidence: number,
    public text1: string,
    public url1: string,
    public text2: string,
    public url2: string,
    public similarity: number
  ) {
  }
}

@Component({
  selector: 'app-textsimilarity',
  templateUrl: './textsimilarity.component.html',
  styleUrls: ['./textsimilarity.component.css']
})

export class TextsimilarityComponent implements OnInit {

  public sim: Sim;
  public stampaj: boolean = false

  constructor(
    private httpClient: HttpClient,
    private logService: LogService
  ) {
    this.sim = new Sim("0", 0,"0",0,"0","0","0","0",0)
  }

  ngOnInit(): void {
  }

  apiZahtev(event: Event): void{
    let text1 = (<HTMLInputElement>document.getElementById("textArea1")).value;
    let text2 = (<HTMLInputElement>document.getElementById("textArea2")).value;

    let zahtev = "https://api.dandelion.eu/datatxt/sim/v1/?text1=";
    zahtev+= text1 + '&' + 'text2=' + text2;
    zahtev+= '&token=' + localStorage.getItem("token");

    console.log("Text1: " + text1)
    console.log("Text2: " + text2)
    console.log("Zahtev: " + zahtev)

    this.httpClient.get<any>(zahtev).subscribe(
      response => {
        console.log("response: ")
        console.log(response)

        this.sim = response
        console.log("similarity: " + this.sim.similarity)
        this.stampaj = true

        let log = '[' + response.timestamp + ']' + " | GET " + zahtev;
        this.logService.addToList(log)

      }
    )
  }

}
