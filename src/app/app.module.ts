import { NgModule } from '@angular/core';

// Import simplified API to communicate with API or server-side
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Impport Material modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

// Import components
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const appRoutes: Routes = [
	// Define welcome view route
	{ path: 'welcome', component: WelcomePageComponent },
	// Define movie view route
	{ path: 'movies', component: MovieCardComponent },
	// Set welcome view as default
	{ path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

@NgModule({
	declarations: [
		AppComponent,
		UserRegistrationFormComponent,
		UserLoginFormComponent,
		MovieCardComponent,
		WelcomePageComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		MatDialogModule,
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		MatSnackBarModule,
		MatCardModule,
		MatIconModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
