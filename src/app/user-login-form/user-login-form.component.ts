import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-user-login-form',
	templateUrl: './user-login-form.component.html',
	styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
	@Input() userData = { Username: '', Password: '' };

	constructor(
		public fetchApiData: FetchApiDataService,
		public dialogRef: MatDialogRef<UserLoginFormComponent>,
		public snackBar: MatSnackBar
	) {}

	ngOnInit(): void {}

	// This is the function responsible for sending the form inputs to the backend
	loginUser(): void {
		this.fetchApiData.userLogin(this.userData).subscribe(
			(response) => {
				// Logic for a successful user registration goes here! (To be implemented)
				this.dialogRef.close(); // This will close the modal on success!
				console.log(response);
				localStorage.setItem('username', response.user.Username);
				localStorage.setItem('token', response.token);
				this.snackBar.open('User logged in successfully!', 'OK', {
					duration: 2000,
				});
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
