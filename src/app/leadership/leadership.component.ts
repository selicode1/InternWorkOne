import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { MiniNavComponent } from '../mini-nav/mini-nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [NavigationBarComponent, MiniNavComponent, FooterComponent],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss'
})
export class LeadershipComponent {

}
