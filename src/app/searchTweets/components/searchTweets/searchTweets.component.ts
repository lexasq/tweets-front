import { Component } from '@angular/core';
import { SearchTweetsService } from '../../services/searchTweets.service';
import { TweetModel } from '../../models/tweet.model';

@Component({
  selector: 'app-search-tweets',
  templateUrl: './searchTweets.component.html',
  styleUrls: ['./searchTweets.css']
})
export class SearchTweetsComponent {
  searchType: string;
  tweets: TweetModel[];
  pageTweets: TweetModel[];
  pages: number;
  currentpage: number;
  preload: boolean;

  constructor(private SearchTweets: SearchTweetsService) {
    this.searchType = 'hashtags';
    this.pages = 0;
    this.currentpage = 1;
    this.pageTweets = [];
  }

  getTweets(value: string, $event) {
    if ($event.key === 'Enter') {
      this.searchTweets(value);
    }
  }

  searchTweets(value): void {
    this.preload = true;
    this.tweets = [];
    this.currentpage = 1;
    this.pageTweets = [];
    this.pages = 0;
    this.SearchTweets.getTweets(this.searchType, value).subscribe((tweets: [TweetModel]) => {
      this.tweets =  this.SearchTweets.shortenTweets(tweets);
      this.getPagesNumber();
      this.preload = false;
    }, () => {
      this.preload = false;
    } );
  }

  getPagesNumber() {
    if (this.tweets.length > 10) {
      this.pages = Math.trunc(this.tweets.length / 10) + 1;
      this.changePage();
    }
  }

  changePage() {
    this.pageTweets = [];
    this.tweets.forEach((tweet, index) => {
      if ((index <= this.currentpage * 10) && (index >= (this.currentpage - 1) * 10 )) {
        this.pageTweets.push(tweet);
      }
    });
  }

  range(number) {
    return new Array(number);
  }
}
