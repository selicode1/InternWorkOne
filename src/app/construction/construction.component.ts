import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-construction',
  standalone: true,
  imports: [NavigationBarComponent, FooterComponent, NgFor],
  templateUrl: './construction.component.html',
  styleUrl: './construction.component.scss'
})
export class ConstructionComponent {
  projects = [
    { title: 'EL HQ', image: '/images/2149092018.jpg' },
    { title: 'The Pod', image: '/images/2149092018.jpg' },
  ];
}
