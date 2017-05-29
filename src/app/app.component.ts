import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
	selectedValue;

	data = [{
		id: 1,
		text: 'test'
	},
	{
		id: 2,
		text: '2 test'
	}];
}
