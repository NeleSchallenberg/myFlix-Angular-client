import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';

/**
 * Displays the navigation bar component
 */
@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
	constructor(
		public fetchApiData: FetchApiDataService,
		private router: Router
	) {}

	/**
	 * Navigate to profile route
	 */
	viewProfile(): void {
		this.router.navigate(['profile']);
	}

	/**
	 * Navigate to movies route
	 */
	viewMovies(): void {
		this.router.navigate(['movies']);
	}

	/**
	 * Log out user by clearing local storage and navigating to welcome route
	 */
	onLogout(): void {
		this.router.navigate(['welcome']);
		localStorage.clear();
	}
}
