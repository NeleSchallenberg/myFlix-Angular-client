import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Display genre component when user clicks on "Genre" button
 */
@Component({
	selector: 'app-genre',
	templateUrl: './genre.component.html',
	styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
	constructor(
		@Inject(MAT_DIALOG_DATA)
		public data: {
			Name: string;
			Description: string;
		}
	) {}

	ngOnInit(): void {}
}
