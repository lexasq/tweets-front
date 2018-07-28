import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// components
import { TweetsByHashTagComponent } from './components/hashTag/tweetsByHashTag.component';
import { TweetsByUserPageComponent } from './components/userPage/tweetsByUserPage.component';
import {SearchTweetsComponent} from './components/searchTweets/searchTweets.component';

// services
import { SearchTweetsService } from './services/searchTweets';


@NgModule({
  declarations: [
    TweetsByHashTagComponent,
    TweetsByUserPageComponent,
    SearchTweetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SearchTweetsService],
  bootstrap: [SearchTweetsComponent],
  exports: [SearchTweetsComponent]
})
export class SearchTweetsModule { }
