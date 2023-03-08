import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SearchResults } from '../interfaces/search-result.interface';

const apiUrl: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ItuneService {
  public total = 0;
  

  constructor(private http: HttpClient) {}

  public getITunesResults(term: string): Observable<SearchResults> {
      term = term.trim();
      // console.log('api url', this.apiUrl);
      return this.http.jsonp<SearchResults>(
          apiUrl + term,
          'callback'
      // ).pipe(
      //     catchError(this.handleError(error)) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred
          console.error('An error occurred:', error.error.message);
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`
          );
      }

      // Return an observable with a user-facing error message.
      return new Error('Something went in sending the request. Please try again.');
  }
}
