import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// components
import { TweetsByHashTagComponent } from './components/hashTag/tweetsByHashTag.component';
import { TweetsByUserPageComponent } from './components/userPage/tweetsByUserPage.component';
import {SearchTweetsComponent} from './components/searchTweets/searchTweets.component';

@NgModule({
  declarations: [
    TweetsByHashTagComponent,
    TweetsByUserPageComponent,
    SearchTweetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SearchTweetsComponent],
  exports: [SearchTweetsComponent]
})
export class SearchTweetsModule { }
