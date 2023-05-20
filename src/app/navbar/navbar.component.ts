import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';

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

	viewProfile(): void {
		this.router.navigate(['profile']);
	}
}
