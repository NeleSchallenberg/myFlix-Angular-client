import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DirectorComponent } from '../director/director.component';
import { GenreComponent } from '../genre/genre.component';
import { MovieDescriptionComponent } from '../movie-description/movie-description.component';

/**
 * Display favorite movie card component in profile view
 */
@Component({
	selector: 'app-favorite-movie-card',
	templateUrl: './favorite-movie-card.component.html',
	styleUrls: ['./favorite-movie-card.component.scss'],
})
export class FavoriteMovieCardComponent implements OnInit {
	movies: any[] = [];
	favorites: any[] = [];

	constructor(
		public fetchApiData: FetchApiDataService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this.getFavorites();
	}

	/**
	 * Get list of favorite movies for current user
	 */
	getFavorites(): void {
		this.fetchApiData.getUser().subscribe((response: any) => {
			this.favorites = response.FavoriteMovies;
			console.log(response);
			return this.favorites;
		});
	}

	/**
	 * Checks if movie is in favorites list
	 * @param {string} id - Movie ID
	 * @returns {boolean} - True or false
	 */
	isFavorite(id: string): boolean {
		return this.favorites.includes(id);
	}

	/**
	 * Add movie to favorites list
	 * @param {string} id - Movie ID
	 */
	addFavorite(id: string): void {
		console.log(id);
		this.fetchApiData.addFavorite(id).subscribe((response) => {
			console.log(response);
			this.snackBar.open('Movie was added to your list!', 'OK', {
				duration: 4000,
			});
			this.ngOnInit();
		});
	}

	/**
	 * Delete movie from favorites list
	 * @param {string} id - Movie ID
	 */
	deleteFavorite(id: string): void {
		console.log(id);
		this.fetchApiData.deleteFavorite(id).subscribe((response) => {
			console.log(response);
			this.snackBar.open('Movie was deleted from your list.', 'OK', {
				duration: 4000,
			});
			this.ngOnInit();
		});
	}

	/**
	 * Displays genre details in a dialog
	 * @param {string} name - Genre name
	 * @param {string} description - Genre description
	 */
	getGenre(name: string, description: string): void {
		console.log(name);
		this.dialog.open(GenreComponent, {
			data: {
				Name: name,
				Description: description,
			},
		});
	}

	/**
	 * Display director details in a dialog
	 * @param {string} name - Director name
	 * @param {string} bio - Director bio
	 */
	getDirector(name: string, bio: string): void {
		console.log(name);
		this.dialog.open(DirectorComponent, {
			data: {
				Name: name,
				Bio: bio,
			},
		});
	}

	/**
	 * Display movie description in a dialog
	 * @param {string} title - Movie title
	 * @param {string} year - Year of release
	 * @param {string} movieDescription - Movie plot description
	 */
	getDescription(
		title: string,
		year: string,
		movieDescription: string
	): void {
		this.dialog.open(MovieDescriptionComponent, {
			data: {
				Title: title,
				Year: year,
				Description: movieDescription,
			},
		});
	}
}
