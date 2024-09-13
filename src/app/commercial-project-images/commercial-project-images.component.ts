import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-commercial-project-images',
  standalone: true,
  imports: [NgFor],
  templateUrl: './commercial-project-images.component.html',
  styleUrl: './commercial-project-images.component.scss'
})
export class CommercialProjectImagesComponent {
  projects = [
    { title: 'EL HQ', image: '/assets/el-hq.jpg' },
    { title: 'The Pod', image: '/assets/the-pod.jpg' },
    { title: 'SERVMET', image: '/assets/servmet.jpg' },
    { title: 'Devtraco Club House', image: '/assets/devtraco-club-house.jpg' },
    { title: 'Supermaritime', image: '/assets/supermaritime.jpg' },
    { title: 'Seedco', image: '/assets/seedco.jpg' },
    { title: 'Meriblock Heights', image: '/assets/meriblock-heights.jpg' },
    { title: 'Ghana Insurers Association', image: '/assets/ghana-insurers-association.jpg' }
  ];
}
