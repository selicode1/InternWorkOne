import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ImagesliderComponent } from '../imageslider/imageslider.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, NavigationBarComponent, FooterComponent, ImagesliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
