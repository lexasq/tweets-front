import { Component } from '@angular/core';
import { SearchTweetsService } from '../../services/searchTweets';

@Component({
  selector: 'app-tweets-by-hashtag',
  templateUrl: './tweetsByHashTag.component.html',
  styleUrls: ['./tweetsByHashTag.component.css']
})
export class TweetsByHashTagComponent {
  constructor(private SearchTweets: SearchTweetsService) {

    this.SearchTweets.getTweetsByHashtags('/Python').subscribe(project => {
      console.log(project);
    });
  }
}
