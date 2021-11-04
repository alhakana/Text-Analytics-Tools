import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../log.service";
import {Annotation} from "../model";

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})

// The Mona Lisa is a 16th century oil painting created by Leonardo. It's held at the Louvre in Paris.

export class EntityComponent implements OnInit {

  public annotations: Annotation[];
  public sliderModel: any
  public print: boolean = false

  checkImage: any
  checkAbstract: any
  checkCategories: any

  lang: any

  constructor(
    private httpClient: HttpClient,
    private logService: LogService
  ) {

    this.annotations=[];
  }
  ngOnInit(): void {}

  apiRequest(): void {

    let request = "https://api.dandelion.eu/datatxt/nex/v1/?lang=en&text=";
    let text = (<HTMLInputElement>document.getElementById("textArea")).value;

    request += text + '&min_confidence=' + this.sliderModel + '&';

    if (this.checkImage == true || this.checkAbstract == true || this.checkCategories == true){
      request += "include=";
      if (this.checkImage == true)
        request +='image,';
      if (this.checkAbstract == true)
        request+='abstract,';
      if (this.checkCategories == true)
        request+='categories,'

      request = request.substr(0, request.length-1);
      request+='&';
    }

    request += 'token=' + localStorage.getItem("token");

    this.httpClient.get<any>(request).subscribe(
      response => {
        this.lang = response.lang;
        this.print = true;

        this.annotations = response.annotations;

        let log = '[' + response.timestamp + ']' + " | GET " + request;
        console.log(log);
        this.logService.addToList(log)

      }
    )
  }

}
