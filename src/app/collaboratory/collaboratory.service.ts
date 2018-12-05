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
import { Link } from '../models/link';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'text/html'})
};


@Injectable({ providedIn: 'root' })
export class CollaboratoryService {
  
  constructor(private http: HttpClient,
    private localStorage: Storage) { }
    
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

  getChallenge(id: number | String) {
    const url = `${environment.runtime.baseUrl}/api/challenges/${id}`;
    return this.http.get<Challenges>(url, httpOptions).pipe(
      tap((challenge: Challenges) => console.log(`fetched 1 challenge for id=${this.communityId}`)),
      catchError(this.handleError<Challenges>('getChallenge'))
    );
  }
  
  getChallengeBySearchTerm(term: string) {
    const url = `${environment.runtime.baseUrl}/api/challenges/`;
    return this.http.get<Challenges[]>('',{params: {searchTerm: term}});
  }
  // getChallenge(id: number | string) {
  //   return this.getChallenges(query).pipe(
  //     // (+) before `id` turns the string into a number
  //     map((challenges: Challenges) => challenges.find(challenge => challenge.id === +id))
  //   );
  // }

   getInitialNoteCount(viewId: string){
    const url = `${environment.runtime.stageUrl}/api/links/notesCount/${viewId}`;
      return this.http.get<Challenges>(url,httpOptions).pipe(
        tap((challenges: Challenges) => console.log(`fetched challenges for id=${viewId}`)),
        catchError(this.handleError<Challenges>('getInitialNoteCount'))
      );
  }

  createLink(fromId, toId, type, data, success, failure){
    var link = {} as Link;
    link.from = fromId;
    link.to = toId;
    link.type = type;
    link.data = data;
    const url = `${environment.runtime.stageUrl}/api/links/`;
    return this.http.post<Link>(url,{ query: link } ,httpOptions).pipe(
      tap((link: Link) => console.log(`New Link Created`)),
      catchError(this.handleError<Link>('postedLinks'))
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
