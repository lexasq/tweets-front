import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// components
import { TweetsByHashTagComponent } from './components/hashTag/tweetsByHashTag.component';
import { TweetsByUserPageComponent } from './components/userPage/tweetsByUserPage.component';
import {SearchTweetsPageComponent} from './components/searchTweetsPage/searchTweetsPage.component';

@NgModule({
  declarations: [
    TweetsByHashTagComponent,
    TweetsByUserPageComponent,
    SearchTweetsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SearchTweetsPageComponent],
  exports: [SearchTweetsPageComponent]
})
export class SearchTweetsModule { }
