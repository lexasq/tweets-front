import { Component } from '@angular/core';
import { SearchTweetsService } from '../../services/searchTweets.service';
import { TweetModel } from '../../models/tweet.model';

@Component({
  selector: 'app-search-tweets',
  templateUrl: './searchTweets.component.html',
  styleUrls: ['./searchTweets.css']
})
/**
 * @param {string} searchType - changes API point that'll be called to pull results
 * @param {TweetModel[]} tweets - contains all results that were returned by SearchService
 * @param {TweetModel[]} visibleTweets - contains only currently visible tweets
 * @param {number} numberOfPages - number of possible pages
 * @param {number} currentPage - number of the current page
 * @param {boolean} preload - stands for showing preloader
 */
export class SearchTweetsComponent {
  searchType: string;
  tweets: TweetModel[];
  visibleTweets: TweetModel[];
  numberOfPages: number;
  currentpage: number;
  preload: boolean;

  /**
   * Representation of the SearchTweetsService
   * @param SearchTweets
   */
  constructor(private SearchTweets: SearchTweetsService) {
    this.searchType = 'hashtags';
    this.numberOfPages = 0;
    this.currentpage = 1;
    this.visibleTweets = [];
  }

  /**
   * Searching Tweets using just text input
   * @param {string} searchText
   * @param {object} $event - we need this to track if the 'Enter' key was pressed
   */
  getTweets(searchText: string, $event) {
    if ($event.key === 'Enter') {
      this.searchTweets(searchText);
    }
  }

  /**
   * Searching Tweets
   * @param searchText
   */
  searchTweets(searchText): void {
    this.preload = true;
    this.tweets = [];
    this.currentpage = 1;
    this.visibleTweets = [];
    this.numberOfPages = 0;
    this.SearchTweets.getTweets(this.searchType, searchText).subscribe((tweets: [TweetModel]) => {
      this.tweets =  this.SearchTweets.shortenTweets(tweets);
      this.getPagesNumber();
      this.preload = false;
    }, () => {
      this.preload = false;
    } );
  }

  getPagesNumber() {
    if (this.tweets.length > 10) {
      this.numberOfPages = Math.trunc(this.tweets.length / 10) + 1;
      this.changePage();
    }
  }

  changePage() {
    this.visibleTweets = [];
    this.tweets.forEach((tweet, index) => {
      if ((index <= this.currentpage * 10) && (index >= (this.currentpage - 1) * 10 )) {
        this.visibleTweets.push(tweet);
      }
    });
  }

  range(number) {
    return new Array(number);
  }
}
