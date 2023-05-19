import { Component, OnInit, Input } from '@angular/core';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
	@Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

	constructor(
		public fetchApiData: FetchApiDataService,

		public snackBar: MatSnackBar
	) {}

	ngOnInit(): void {}

	// Fetch current user data
	getUser(): void {
		this.fetchApiData.getUser().subscribe((response) => {
			console.log(response);
		});
	}
	// This is the function responsible for sending the form inputs to the backend
	updateUser(): void {
		this.fetchApiData.editUser(this.userData).subscribe(
			(response) => {
				console.log(response);
				this.snackBar.open(
					'User updated successfully successfully!',
					'OK',
					{
						duration: 2000,
					}
				);
			},
			(response) => {
				console.log(response);
				this.snackBar.open(response, 'OK', {
					duration: 2000,
				});
			}
		);
	}
}
