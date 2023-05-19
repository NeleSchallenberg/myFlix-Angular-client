import { Component } from '@angular/core';

import { Router } from '@angular/router';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from './fetch-api-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'myFlix-Angular-client';

	constructor(
		public fetchApiData: FetchApiDataService,
		private router: Router
	) {}

	viewProfile(): void {
		this.router.navigate(['profile']);
	}
}
