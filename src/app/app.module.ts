import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';

import { AppComponent } from './app.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { EntityComponent } from './entity/entity.component';
import { TextsimilarityComponent } from './textsimilarity/textsimilarity.component';
import { LanguagedetectionComponent } from './languagedetection/languagedetection.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { TokenpageComponent } from './tokenpage/tokenpage.component';
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LogsComponent } from './logs/logs.component';


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    BodyComponentComponent,
    NavbarComponent,
    EntityComponent,
    TextsimilarityComponent,
    LanguagedetectionComponent,
    SentimentComponent,
    TokenpageComponent,
    LogsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

