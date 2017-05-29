import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
	selectedValue: number = 0;

	data = [{
		id: 1,
		text: 'test'
	},
	{
		id: 2,
		text: '2 test'
	}];

	cities: any[] = [{
		id: 1,
		state_id: 1,
		text: 'City with state 1'
	},
	{
		id: 2,
		state_id: 2,
		text: 'City with state 2'
	},
	{
		id: 3,
		state_id: 1,
		text: 'City 2 with state 1'
	},
	{
		id: 4,
		state_id: 2,
		text: 'City 2 with state 2'
	}];

	onClickChange() {
		this.cities = this.data;
	}
}
