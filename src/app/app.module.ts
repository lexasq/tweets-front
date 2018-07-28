import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchTweetsModule } from './searchTweets/searchTweets.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SearchTweetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
