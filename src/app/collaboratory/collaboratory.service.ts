import { Injectable } from '@angular/core';
import { Storage } from "../services/storage.service";
import { environment } from '../../environments/environment';
import { Collaboratory } from '../models/collaboratory';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ChallengesCount } from '../models/challenges-count';
import { Challenges } from '../models/challenges';
import { Author } from '../models/author';
import { url } from 'inspector';
import { Link } from '../models/link';
import { View } from '../models/view';
import { Community } from '../models/community';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json','Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjJhOGRiMjY3MDZlYjAyMmZlMTA1N2IiLCJpYXQiOjE1NDQ1ODAzMjksImV4cCI6MTU0NDU5ODMyOX0.O48vIPS9zE59pmnb4sthF3_fQWJCXviDccRflvFg83s'})
};


@Injectable({ providedIn: 'root' })
export class CollaboratoryService {
  
  constructor(private http: HttpClient,
    private localStorage: Storage) { }
    
  private communityId: string = "5acd7b9b2808394fbdd33c23"; 
  private id: string = "5b727baf7eca5140cea7555b";
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjJhOGRiMjY3MDZlYjAyMmZlMTA1N2IiLCJpYXQiOjE1NDQ1NzQ0NzIsImV4cCI6MTU0NDU5MjQ3Mn0.OSjZFh5QgFD_Tncv12EaS6giD_8bxUGc5yjTgi2rVRc";

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


  getMeAsAuthor(): Observable<Author> {
    const url = `${environment.runtime.stageUrl}/api/authors/${this.communityId}/me`;
    return this.http.get<Author>(url, httpOptions).pipe(
      tap((author: Author) => console.log(`fetched author for id=${this.communityId}`)),
      catchError(this.handleError<Author>('getMeAsAuthor'))
    );
  }
  
  postView(newObj): Observable<View> {
    const url = `${environment.runtime.stageUrl}/api/contributions/${this.communityId}`;
    return this.http.post<View>(url, newObj, httpOptions).pipe(
      tap((view: View) => console.log(`created View for id=${this.communityId}`)),
      catchError(this.handleError<View>('postView'))
    );
  }

  postChallenges(challengeQuery) {
    console.log(challengeQuery);
    const url = `${environment.runtime.baseUrl}/api/challenges/${this.communityId}`;
    return this.http.post<Community>(url,{ challenge : challengeQuery } ,httpOptions).pipe(
      tap((community: Community) => console.log(`Posted challenges for id=${this.communityId}`)),
      catchError(this.handleError<Community>('postChallenges'))
    );

  }


  createLink(link){
    // var link = {} as Link;
    // link.from = fromId;
    // link.to = toId;
    // link.type = type;
    // link.data = data;
    console.log(link);
    const url = `${environment.runtime.stageUrl}/api/links/`;
    return this.http.post<Link>(url, link, httpOptions).pipe(
      tap((link: Link) => console.log(`New Link Created`)),
      catchError(this.handleError<Link>('postedLinks'))
    );
  }

  updateCommunityWithView(): Observable<Community> {
    const url = `${environment.runtime.stageUrl}/api/communities/${this.communityId}`;
    return this.http.get<Community>(url, httpOptions).pipe(
      tap((community: Community) => console.log(`fetched community for id=${this.communityId}`)),
      catchError(this.handleError<Community>('updateCommunityWithView'))
    )
  }

  putCommunityWithView(community): Observable<Community> {
    const url = `${environment.runtime.stageUrl}/api/communities/${this.communityId}`;
    return this.http.put<Community>(url,community, httpOptions).pipe(
      tap((community: Community) => console.log(`posted community with view for id=${this.communityId}`)),
      catchError(this.handleError<Community>('putCommunityWithView'))
    )
  }


  getChallengeBySearchTerm(term: string) {
    const url = `${environment.runtime.baseUrl}/api/challenges/`;
    return this.http.get<Challenges[]>('',{params: {searchTerm: term}});
  }

   getInitialNoteCount(viewId: string){
    const url = `${environment.runtime.stageUrl}/api/links/notesCount/${viewId}`;
      return this.http.get<Challenges>(url,httpOptions).pipe(
        tap((challenges: Challenges) => console.log(`fetched challenges for id=${viewId}`)),
        catchError(this.handleError<Challenges>('getInitialNoteCount'))
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
 