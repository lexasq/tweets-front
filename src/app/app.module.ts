import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabModule } from 'angular-tabs-component';

import { AppComponent } from './app.component';
import { SearchTweetsModule } from './searchTweets/searchTweets.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchTweetsModule,
    HttpClientModule,
    TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
