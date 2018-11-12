import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Istep } from "./step";
import { catchError, tap, map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class stepService{

  private stepUrl = 'api/tests/steps.json'

  constructor(private http : HttpClient) {
  }
  
  getAllSteps(): Observable<Istep[]>{
      return this.http.get<Istep[]>(this.stepUrl).pipe(
      tap(data=>console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getStepsForTest(id: number): Observable<Istep | undefined> {
    return this.getAllSteps().pipe(
      map((steps: Istep[]) => steps.find(p => p.testId === id))
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