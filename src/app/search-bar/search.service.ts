import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
// import 'rxjs/operators/debounceTime'
// import 'rxjs/operators/distinctUntilChanged';
// import 'rxjs/operators/switchMap';

@Injectable() 
export class SearchService {
  baseUrl: string = 'https://api.kfurl.com/libraries';
  queryUrl: string = '?search=';

  constructor(private http: Http) {}
  search(terms: Observable < string > ) {
    // return terms.debounceTime(500)
    //   .distinctUntilChanged()
    //   .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
      .get(this.baseUrl + this.queryUrl + term)
      .pipe(map(res => res.json()));
  }

}
