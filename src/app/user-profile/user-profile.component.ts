import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

/**
 * Displays user profile component
 */
@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
	user: any = {};

	@Input() userData = {
		Username: '',
		Password: '',
		Email: '',
		Birthday: '',
	};

	constructor(
		public fetchApiData: FetchApiDataService,
		public snackBar: MatSnackBar,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getUser();
	}

	/**
	 * Fetch current user data from the backend
	 */
	getUser(): void {
		this.fetchApiData.getUser().subscribe((response: any) => {
			this.user = response;
			this.userData.Username = this.user.Username;
			this.userData.Email = this.user.Email;
			this.userData.Birthday = formatDate(
				this.user.Birthday,
				'yyyy-MM-dd',
				'en-US',
				'UTC+0'
			);
			return this.user;
		});
	}

	/**
	 * Updates user profile data
	 */
	updateUser(): void {
		this.fetchApiData.editUser(this.userData).subscribe((response) => {
			console.log(response);
			if (
				this.user.Username !== response.Username ||
				this.user.Password !== response.Password
			) {
				localStorage.clear();
				this.router.navigate(['welcome']);
				this.snackBar.open(
					'User data updated successfully! Please log in again.',
					'OK',
					{
						duration: 2000,
					}
				);
			} else {
				this.snackBar.open(
					'Something went wrong! Please try again.',
					'OK',
					{
						duration: 2000,
					}
				);
			}
		});
	}
}
