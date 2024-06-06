import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
  description: string = 'This is a detailed description of the client. It contains information about the client\'s background, services, and other relevant details that might be of interest. Here is more text to illustrate the expand feature.';
  showFullDescription: boolean = false;

  toggleDescription(event: Event) {
    event.preventDefault();
    this.showFullDescription = !this.showFullDescription;
  }
}
