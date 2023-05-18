import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {
	HttpClient,
	HttpHeaders,
	HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// Declare API URL that will provide data for client app
const apiUrl = 'https://female-filmmakers.herokuapp.com/';
@Injectable({
	providedIn: 'root',
})
export class FetchApiDataService {
	// Inject HttpClient module to constructor params
	// Provide HttpClient to entire class, making it available via this.http
	constructor(private http: HttpClient) {}

	// Make API call for user registration endpoint / POST
	public userRegistration(userDetails: any): Observable<any> {
		console.log(userDetails);
		return this.http
			.post(apiUrl + 'users', userDetails)
			.pipe(catchError(this.handleError));
	}

	// Make API call for user login endpoint / POST
	public userLogin(userDetails: any): Observable<any> {
		console.log(userDetails);
		return this.http
			.post(apiUrl + 'login', userDetails)
			.pipe(catchError(this.handleError));
	}

	// Make API call for get all movies endpoint / GET
	getAllMovies(): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http
			.get(apiUrl + 'movies', {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(map(this.extractResponseData), catchError(this.handleError));
	}

	// Make API call for get movie by title endpoint / GET
	getMovieByTitle(title: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http
			.get(apiUrl + 'movies/' + title, {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(map(this.extractResponseData), catchError(this.handleError));
	}

	// Make API call for get director endpoint / GET
	getDirector(directorName: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http
			.get(apiUrl + 'movies/directors/' + directorName, {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(map(this.extractResponseData), catchError(this.handleError));
	}

	// Make API call for get genre endpoint / GET
	getGenre(genreName: string): Observable<any> {
		const token = localStorage.getItem('token');
		return this.http
			.get(apiUrl + 'movies/genres/' + genreName, {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(map(this.extractResponseData), catchError(this.handleError));
	}

	// Make API call for get user endpoint / GET
	getUser(): Observable<any> {
		const token = localStorage.getItem('token');
		const username = localStorage.getItem('username');
		return this.http
			.get(apiUrl + 'users/' + username, {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(map(this.extractResponseData), catchError(this.handleError));
	}

	// Make API call for get user favorite movies endpoint / GET
	getFavoriteMovies(): Observable<any> {
		const token = localStorage.getItem('token');
		const username = localStorage.getItem('username');
		return this.http
			.get(apiUrl + 'users/' + username, {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(
				map(this.extractResponseData),
				map((data) => data.FavoriteMovies),
				catchError(this.handleError)
			);
	}

	// Make API call for add favorite endpoint / POST
	addFavorite(movieId: string): Observable<any> {
		const token = localStorage.getItem('token');
		const username = localStorage.getItem('username');
		return this.http
			.get(apiUrl + 'users/' + username + '/movies/' + movieId, {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(map(this.extractResponseData), catchError(this.handleError));
	}

	// Make API call for delete favorite endpoint / DELETE
	deleteFavorite(movieId: string): Observable<any> {
		const token = localStorage.getItem('token');
		const username = localStorage.getItem('username');
		return this.http
			.get(apiUrl + 'users/' + username + '/movies/' + movieId, {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(map(this.extractResponseData), catchError(this.handleError));
	}

	// Make API call for edit user endpoint / PUT
	editUser(updatedUser: any): Observable<any> {
		const token = localStorage.getItem('token');
		const username = localStorage.getItem('username');
		return this.http
			.put(apiUrl + 'users/' + username, updatedUser, {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(map(this.extractResponseData), catchError(this.handleError));
	}

	// Make API call for delete user endpoint / DELETE
	deleteUser(): Observable<any> {
		const username = localStorage.getItem('username');
		const token = localStorage.getItem('token');
		return this.http
			.delete(apiUrl + 'users/' + username, {
				headers: new HttpHeaders({
					Authorization: 'Bearer ' + token,
				}),
			})
			.pipe(map(this.extractResponseData), catchError(this.handleError));
	}

	// Non-typed response extraction
	private extractResponseData(res: any): any {
		const body = res;
		return body || {};
	}

	// Handle error
	private handleError(error: HttpErrorResponse): any {
		if (error.error instanceof ErrorEvent) {
			console.error('Some error occurred:', error.error.message);
		} else {
			console.error(
				`Error Status code ${error.status}, ` +
					`Error body is: ${error.error}`
			);
		}
		return throwError(
			() => new Error('Something bad happened; please try again later.')
		);
	}
}
