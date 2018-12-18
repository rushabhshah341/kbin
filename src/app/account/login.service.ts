import { Injectable } from '@angular/core';
import { Storage } from "../services/storage.service";
import { environment } from '../../environments/environment';
import { Collaboratory } from '../models/collaboratory';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjJhOGRiMjY3MDZlYjAyMmZlMTA1N2IiLCJpYXQiOjE1NDQ1ODAzMjksImV4cCI6MTU0NDU5ODMyOX0.O48vIPS9zE59pmnb4sthF3_fQWJCXviDccRflvFg83s' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,
    private localStorage: Storage) {
    this.currentUserSubject = new BehaviorSubject<User>(localStorage.getItem('token'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string): Observable<User> {
    let userObject = {
      userName: username,
      password: password
    };
    const url = `${environment.runtime.stageUrl}/auth/local/`;
    return this.http.post<User>(url, userObject).pipe(
      tap((user: User) => {
        console.log(`fetched token for ${username}`);
        if (user && user.token) {
          // this.localStorage.setItem('currentUser', JSON.stringify(user));
          this.localStorage.setItem('token', user.token);
        }
      }),
      catchError(this.handleError<User>('login'))
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }


  private handleError<T>(operation = 'operation', result?: T) {
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
