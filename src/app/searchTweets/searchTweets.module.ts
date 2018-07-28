import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabModule } from 'angular-tabs-component'

// components
import { TweetsByHashTagComponent } from './components/hashTag/tweetsByHashTag.component';
import { TweetsByUserPageComponent } from './components/userPage/tweetsByUserPage.component';
import {SearchTweetsComponent} from './components/searchTweets/searchTweets.component';

// services
import { SearchTweetsService } from './services/searchTweets.service';


@NgModule({
  declarations: [
    TweetsByHashTagComponent,
    TweetsByUserPageComponent,
    SearchTweetsComponent
  ],
  imports: [
    BrowserModule,
    TabModule
  ],
  providers: [SearchTweetsService],
  bootstrap: [SearchTweetsComponent],
  exports: [SearchTweetsComponent]
})
export class SearchTweetsModule { }
