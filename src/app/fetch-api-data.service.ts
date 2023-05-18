import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Declare API URL that will provide data for client app
const apiUrl = 'YOUR_HOSTED_API_URL_HERE/';
@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  // Inject HttpClient module to constructor params
  // Provide HttpClient to entire class, making it available via this.http
  constructor(private http: HttpClient) {}

  // Making API call for user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
