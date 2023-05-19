import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

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
		public dialogRef: MatDialogRef<UserProfileComponent>,
		public snackBar: MatSnackBar
	) {}

	ngOnInit(): void {}

	// This is the function responsible for sending the form inputs to the backend
	updateUser(): void {
		this.fetchApiData.editUser(this.userData).subscribe(
			(response) => {
				// Logic for a successful user registration goes here! (To be implemented)
				this.dialogRef.close(); // This will close the modal on success!
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
