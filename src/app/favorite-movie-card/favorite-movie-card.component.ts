import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DirectorComponent } from '../director/director.component';
import { GenreComponent } from '../genre/genre.component';
import { MovieDescriptionComponent } from '../movie-description/movie-description.component';

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
		this.getMovies();
		this.getFavorites();
	}

	// Get all movies
	getMovies(): void {
		this.fetchApiData.getAllMovies().subscribe((response: any) => {
			this.movies = response;
			console.log(this.movies);
			return this.movies;
		});
	}

	// Get information about genre
	getGenre(name: string, description: string): void {
		console.log(name);
		this.dialog.open(GenreComponent, {
			data: {
				Name: name,
				Description: description,
			},
		});
	}

	// Get information about director
	getDirector(name: string, bio: string): void {
		console.log(name);
		this.dialog.open(DirectorComponent, {
			data: {
				Name: name,
				Bio: bio,
			},
		});
	}

	// Get description of movie plot
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

	// Get list of favorite movies
	getFavorites(): void {
		this.fetchApiData.getUser().subscribe((response: any) => {
			this.favorites = response.FavoriteMovies;
			console.log(this.favorites);
			return this.favorites;
		});
	}

	// Check if movie is favorite
	isFavorite(id: string): boolean {
		return this.favorites.includes(id);
	}

	// Add movie to list of favorites
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

	// Delete movie from list of favorites
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
}
