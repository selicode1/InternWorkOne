import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-commercial',
  standalone: true,
  imports: [NavigationBarComponent, FooterComponent, NgFor],
  templateUrl: './commercial.component.html',
  styleUrl: './commercial.component.scss'
})
export class CommercialComponent {
  projects = [
    { title: 'EL HQ', image: '/images/2149092018.jpg' },
    { title: 'The Pod', image: '/images/2149092018.jpg' },
    { title: 'SERVMET', image: '/images/2149092018.jpg' },
    { title: 'Devtraco Club House', image: '/images/2149092018.jpg' },
    { title: 'Supermaritime', image: '/images/2149092018.jpg' },
    { title: 'Seedco', image: '/images/2149092018.jpg' },
    { title: 'Meriblock Heights', image: '/images/2149092018.jpg' },
    { title: 'Ghana Insurers Association', image: '/images/2149092018.jpg' }
  ];
}
