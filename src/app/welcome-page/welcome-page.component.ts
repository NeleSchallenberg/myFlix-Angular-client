import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * Default view if the user is not logged in
 * Display options to log in and sign up
 */
@Component({
	selector: 'app-welcome-page',
	templateUrl: './welcome-page.component.html',
	styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
	constructor(public dialog: MatDialog) {}
	ngOnInit(): void {}

	/**
	 * Function to open the dialog when the signup button is clicked
	 */

	openUserRegistrationDialog(): void {
		this.dialog.open(UserRegistrationFormComponent, {
			width: '280px', // Assigning the dialog a width
		});
	}

	/**
	 * Function to open the dialog when login button is clicked
	 */
	openUserLoginDialog(): void {
		this.dialog.open(UserLoginFormComponent, {
			width: '280px', // Assigning the dialog a width
		});
	}
}
