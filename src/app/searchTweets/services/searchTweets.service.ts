import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {TweetModel} from '../models/tweet.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
};

@Injectable()

export class SearchTweetsService {
  /** @ngInject */
  constructor(private $http: HttpClient) {
  }
  shortenTweets(tweets: [TweetModel]) {
    tweets.map(tweet => {tweet.text = (tweet.text.length > 50) ?
      `${tweet.text.substr(0, 50)}...` : tweet.text ; });
    tweets.map(tweet => {
      const parsedDate = tweet.date.substr(tweet.date.indexOf('-') + 2).split(' ');
      tweet.date = `${parsedDate[1]} ${parsedDate[0]}, ${parsedDate[2]}`;
    });
    return tweets;
  }
  getTweetsByHashtags (hashtag: string) {
    const query = `${environment.hashtagsSearch}${hashtag}${environment.additionalParams}`;
    return this.$http.get(query, httpOptions);
  }
  getTweetsByPageName (user: string) {
    const query = `${environment.usersSearch}${user}${environment.additionalParams}`;
    return this.$http.get(query, httpOptions);
  }

  getTweets(type, value) {
    if (type === 'hashtags') {
      return this.getTweetsByHashtags(value);
    } else if (type === 'pageName') {
      return this.getTweetsByPageName(value);
    }
  }
}

