import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from "../footer/footer.component";
import { ImagesliderComponent } from '../imageslider/imageslider.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [NavigationBarComponent, FooterComponent, ImagesliderComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {

}
