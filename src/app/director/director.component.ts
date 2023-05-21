import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Display director component when user clicks on "Director" button
 */
@Component({
	selector: 'app-director',
	templateUrl: './director.component.html',
	styleUrls: ['./director.component.scss'],
})
export class DirectorComponent implements OnInit {
	constructor(
		@Inject(MAT_DIALOG_DATA)
		public data: {
			Name: string;
			Bio: string;
			Birth: string;
		}
	) {}

	ngOnInit(): void {}
}
