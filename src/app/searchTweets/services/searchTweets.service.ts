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
  getTweetsByHashtags (hashtag) {
    const query = `${environment.hashtagsSearch}${hashtag}${environment.additionalParams}`;
    return this.$http.get(query, httpOptions);
  }
  getTweetsByPageName (user) {
    const query = `${environment.usersSearch}${user}${environment.additionalParams}`;
    return this.$http.get(query, httpOptions);
  }

}

