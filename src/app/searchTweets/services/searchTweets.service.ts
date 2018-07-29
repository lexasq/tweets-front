import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
};

@Injectable()

export class SearchTweetsService {
  /** @ngInject */
  constructor(private $http: HttpClient) {
  }
  static shortenTweets(tweets) {
    tweets.map(tweet => {tweet.text = (tweet.text.length > 50) ?
      `${tweet.text.substr(0, 50)}...` : tweet.text ; });
    return tweets;
  }
  getTweetsByHashtags (hashtag) {
    const query = `${environment.hashtagsSearch}${hashtag}${environment.additionalParams}`;
    return this.$http.get(query, httpOptions);
  }
  getTweetsByPageName (user) {
    const query = `${environment.usersSearch}${user}${environment.additionalParams}`;
    return this.$http.get(query, httpOptions);
  }
}

