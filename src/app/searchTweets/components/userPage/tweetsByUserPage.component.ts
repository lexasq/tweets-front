import { Component } from '@angular/core';
import { SearchTweetsService } from '../../services/searchTweets';

@Component({
  selector: 'app-tweets-by-user-page',
  templateUrl: './tweetsByUserPage.component.html',
  styleUrls: ['./tweetsByUserPage.component.css']
})
export class TweetsByUserPageComponent {
  constructor(private SearchTweets: SearchTweetsService) {
    this.SearchTweets.getTweetsByPageName('/Twitter').subscribe(project => {
      console.log(project);
    });
  }
}
