import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntityComponent} from "./components/entity/entity.component";
import {LanguagedetectionComponent} from "./components/languagedetection/languagedetection.component";
import {SentimentComponent} from "./components/sentiment/sentiment.component";
import {TokenpageComponent} from "./components/tokenpage/tokenpage.component";
import {TextsimilarityComponent} from "./components/textsimilarity/textsimilarity.component";
import {AuthGuard} from "./auth.guard";
import {LogsComponent} from "./components/logs/logs.component";

const routes: Routes = [
  { path: 'entity',
    component: EntityComponent, canActivate: [AuthGuard]
  },
  { path: 'languagedetection',
    component: LanguagedetectionComponent, canActivate: [AuthGuard]
  },
  { path: 'sentiment',
    component: SentimentComponent, canActivate: [AuthGuard]
  },
  { path: 'textsimilarity',
    component: TextsimilarityComponent, canActivate: [AuthGuard]
  },
  { path: 'logs',
    component: LogsComponent, canActivate: [AuthGuard]
  },
  { path: 'tokenpage',
    component: TokenpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
