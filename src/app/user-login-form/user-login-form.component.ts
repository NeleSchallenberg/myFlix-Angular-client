import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * Displays user login form with input fields
 */
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
		public snackBar: MatSnackBar,
		private router: Router
	) {}

	ngOnInit(): void {}

	/**
	 * This is the function responsible for sending the form inputs to the backend
	 */
	loginUser(): void {
		this.fetchApiData.userLogin(this.userData).subscribe(
			(response) => {
				this.dialogRef.close(); // Close the modal on success
				console.log(response);
				localStorage.setItem('username', response.user.Username);
				localStorage.setItem('token', response.token);
				this.snackBar.open('User logged in successfully!', 'OK', {
					duration: 2000,
				});
				this.router.navigate(['movies']);
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
