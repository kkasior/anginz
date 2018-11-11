import { Injectable } from "@angular/core";
import { Itest } from "./test";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class testService{

  private testUrl = 'api/tests/tests.json'
  constructor(private http : HttpClient) {
  }
    gettests(): Observable<Itest[]>{
      return this.http.get<Itest[]>(this.testUrl).pipe(
        tap(data=>console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
    gettest(id: number): Observable<Itest | undefined> {
      return this.gettests().pipe(
        map((tests: Itest[]) => tests.find(p => p.testId === id))
      );
    }
    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}