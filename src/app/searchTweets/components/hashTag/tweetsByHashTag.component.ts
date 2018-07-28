import { Component } from '@angular/core';
import { SearchTweetsService } from '../../services/searchTweets';

@Component({
  selector: 'app-tweets-by-hashtag',
  templateUrl: './tweetsByHashTag.component.html',
  styleUrls: ['./tweetsByHashTag.component.css']
})
export class TweetsByHashTagComponent {
  constructor(private SearchTweetsService: SearchTweetsService) {
    this.SearchTweetsService = SearchTweetsService;

    this.SearchTweetsService.getTweetsByHashtags().subscribe(project => {
      console.log(project);
    });
  }
}
