import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogService} from "../../log.service";
import {Annotation} from "../../model";
import {EntityService} from "../../services/entity-service/entity.service";

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})

// The Mona Lisa is a 16th century oil painting created by Leonardo. It's held at the Louvre in Paris.

export class EntityComponent implements OnInit {

  annotations: Annotation[];
  sliderModel: any
  print: boolean = false
  text: any
  checkImage: boolean = false;
  checkAbstract: boolean = false;
  checkCategories: boolean = false;

  lang: any

  constructor(
    private httpClient: HttpClient,
    private logService: LogService,
    public entityService: EntityService
  ) {

    this.annotations=[];
  }
  ngOnInit(): void {}

  apiRequest(): void {
    let include = []

    if(this.checkImage)
      include.push('image')
    if(this.checkAbstract)
      include.push('abstract')
    if(this.checkCategories)
      include.push('categories')


    this.entityService.extractEntities(this.text, this.sliderModel, include).subscribe((response) => {
        this.lang = response.lang;
        this.print = true;
        this.annotations = response.annotations;
     }
    )
  }
  public onChangedImage(value:boolean) {
    this.checkImage = value;
    this.apiRequest()
  }

  public onChangedAbstract(value:boolean) {
    this.checkAbstract = value;
    this.apiRequest()
  }

  public onChangedCategories(value:boolean) {
    this.checkCategories = value;
    this.apiRequest()
  }

  public changeText(value: string) {
    console.log(value)
    this.text = value;
    this.apiRequest()
  }
}
