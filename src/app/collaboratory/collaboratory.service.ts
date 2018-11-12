import { Injectable } from '@angular/core';
import { Storage } from "../services/storage.service";
import { environment } from '../../environments/environment';
import { Collaboratory } from '../models/collaboratory';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ChallengesCount } from '../models/challenges-count';
import { Challenges } from '../models/challenges';
import { url } from 'inspector';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'text/html'})
};


@Injectable({ providedIn: 'root' })
export class CollaboratoryService {
  
  constructor(private http: HttpClient,
    private localStorage: Storage) { }
    
  //var id = "5974e9a2640bb91f7c879187";
  // test site
  // var id = "558abcb01f3b621e75d9bc08";
  //stage site
  // var id = "5acd7b9b2808394fbdd33c23";
  // desktop
  // var id ="5b727baf7eca5140cea7555b";
  // var id = "5a57d22b0fe3451d0cb34f79";
  private communityId: string = "5acd7b9b2808394fbdd33c23";
  private id: string = "5b727baf7eca5140cea7555b";
  // private query: any = {};

  getChallengesCount (): Observable<ChallengesCount> {
    const url = `${environment.runtime.baseUrl}/api/challenges/count/${this.communityId}`;
    return this.http.post<ChallengesCount>(url, httpOptions).pipe(
      tap((challengesCount: ChallengesCount) => console.log(`fetched challengesCount for id=${this.communityId}`)),
      catchError(this.handleError<ChallengesCount>('getChallengesCount'))
    );
  }

  getChallenges (query): Observable<Challenges> {
    const url = `${environment.runtime.baseUrl}/api/challenges/get/${this.id}`;
    return this.http.post<Challenges>(url,{query : query}, httpOptions).pipe(
      tap((challenges: Challenges) => console.log(`fetched challenges for id=${this.communityId}`)),
      catchError(this.handleError<Challenges>('getChallenges'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
