import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
};

@Injectable()

export class SearchTweetsService {
  /** @ngInject */
  hashtag: string;
  constructor(private $http: HttpClient) {
    // DI
    this.hashtag = 'Python';
    this.getTweetsByHashtags();
  }
  getTweetsByHashtags () {
    const query = `${environment.api_url}${this.hashtag}?pages_limit=3&wait=0`;
    return this.$http.get(query, httpOptions);
  }

}

