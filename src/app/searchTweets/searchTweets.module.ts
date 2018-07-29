import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// components
import {SearchTweetsComponent} from './components/searchTweets/searchTweets.component';

// services
import { SearchTweetsService } from './services/searchTweets.service';


@NgModule({
  declarations: [
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
