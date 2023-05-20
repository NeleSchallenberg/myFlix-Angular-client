import { Component, OnInit, Input } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
	user: any = {};
	favorites: any[] = [];

	@Input() userData = {
		Username: '',
		Password: '',
		Email: '',
		Birthday: '',
	};

	constructor(
		public fetchApiData: FetchApiDataService,
		// public dialogRef: MatDialogRef<UserProfileComponent>,
		public snackBar: MatSnackBar,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getUser();
	}

	// Fetch current user data
	getUser(): void {
		this.fetchApiData.getUser().subscribe((resp: any) => {
			// we set user variable to keep what we get as a response from API call
			this.user = resp;
			// console.log(resp);
			this.userData.Username = this.user.Username;
			this.userData.Email = this.user.Email;
			this.userData.Birthday = this.user.Birthday;
			return this.user;
		});
		this.fetchApiData.getAllMovies().subscribe((resp: any) => {
			this.favorites = resp.filter(
				(m: { _id: any }) =>
					this.user.FavoriteMovies.indexOf(m._id) >= 0
			);
		});
	}

	// This is the function responsible for sending the form inputs to the backend
	updateUser(): void {
		this.fetchApiData.editUser(this.userData).subscribe(
			(response) => {
				localStorage.setItem('user', JSON.stringify(response));

				this.snackBar.open('User updated successfully!', 'OK', {
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
