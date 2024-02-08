import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedImage  = 'assets/images/1.jpg';
  coordinates: any;
  onZoomImage(coordinates: any){
    console.log(coordinates);
    this.coordinates = coordinates;
  }

  onThumbClick(index: string){
    this.selectedImage = `assets/images/${index}.jpg`;
  }
}
