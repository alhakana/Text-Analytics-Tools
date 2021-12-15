import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, NgModel} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityComponent } from './components/entity/entity.component';
import { TextsimilarityComponent } from './components/textsimilarity/textsimilarity.component';
import { LanguagedetectionComponent } from './components/languagedetection/languagedetection.component';
import { SentimentComponent } from './components/sentiment/sentiment.component';
import { TokenpageComponent } from './components/tokenpage/tokenpage.component';
import { MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

