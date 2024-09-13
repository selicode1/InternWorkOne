import { Component } from '@angular/core';
import { CommercialComponent } from '../commercial/commercial.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommercialComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

}
