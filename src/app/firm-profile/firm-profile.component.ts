import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { MiniNavComponent } from '../mini-nav/mini-nav.component';


@Component({
  selector: 'app-firm-profile',
  standalone: true,
  imports: [NavigationBarComponent, FooterComponent, MiniNavComponent],
  templateUrl: './firm-profile.component.html',
  styleUrl: './firm-profile.component.scss'
})
export class FirmProfileComponent {

}
