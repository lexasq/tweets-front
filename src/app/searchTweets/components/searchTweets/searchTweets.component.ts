import { Component } from '@angular/core';
import { SearchTweetsService } from '../../services/searchTweets.service';
import { TweetModel } from '../models/tweet.model';

@Component({
  selector: 'app-search-tweets',
  templateUrl: './searchTweets.component.html',
  styleUrls: ['./searchTweets.css']
})
export class SearchTweetsComponent {
  searchType: string;
  tweets: TweetModel;

  constructor(private SearchTweets: SearchTweetsService) {
    this.searchType = 'hashtags';
  }

  getTweets(value: string, $event) {
    if ($event.key === 'Enter') {
      this.searchTweets(value);
    }
  }
  searchTweets(value): void {
    if (this.searchType === 'hashtags') {
      this.SearchTweets.getTweetsByHashtags(value).subscribe(tweets => {
        this.tweets =  this.SearchTweets.shortenTweets(tweets);
      });
    } else if (this.searchType === 'pageName') {
      this.SearchTweets.getTweetsByPageName(value).subscribe(tweets => {
        this.tweets =  this.SearchTweets.shortenTweets(tweets);
      });
    }
  }
}
