import { Component } from '@angular/core';
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
import { MiniNavComponent } from '../mini-nav/mini-nav.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NavigationBarComponent, FooterComponent, NgFor, MiniNavComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  projects = [
    { title: 'The Pod', image: '/images/Accra-Business-School-qqi9sxchoc4ickitci34isxcwyr6tkusq3nuqc9xbc.png' },
    { title: 'SERVMET', image: '/images/Airtel-qqi9sxchoc4ickitci34isxcwyr6tkusq3nuqc9xbc.png' },
    { title: 'Devtraco Club House', image: '/images/BLU-qqi9swen4cgajk426bf5bhie0dmc0cscmfmten65h8.png' },
    { title: 'Supermaritime', image: '/images/BOG-qqi9sxchb6hkv62p0ttrvz9ulrhp81w2ykaavx4rb0.png' },
    { title: 'Seedco', image: '/images/Cocobod-qqi9sxchb6hkv62p0ttrvz9ulrhp81w2ykaavx4rb0.png' },
    { title: 'EL HQ', image: '/images/AC-Development-qqi9swen4cgajk426bf5bhie0dmc0cscmfmten65h8.png' },
    { title: 'Meriblock Heights', image: '/images/Credence-qqi9swenhi380yk6hzohyb5wbkvtlvr2dz0d92bbhk.png' },
    { title: 'Ghana Insurers Association', image: '/images/CU-qqi9sxchb6hkv62p0ttrvz9ulrhp81w2ykaavx4rb0.png' },
    { title: 'EL HQ', image: '/images/Enterprise-qqi9sxchoc4ickitci34isxcwyr6tkusq3nuqc9xbc.png' },
    { title: 'The Pod', image: '/images/GIA-qqi9swen4cgajk426bf5bhie0dmc0cscmfmten65h8.png' },
    { title: 'SERVMET', image: '/images/GPHA-qqi9syabi0iv6s1bvc8egh1b75d2fqztaoxsd73d4s.png' },
    { title: 'Devtraco Club House', image: '/images/ICGC-qqi9sxchb6hkv62p0ttrvz9ulrhp81w2ykaavx4rb0.png' },
    { title: 'Supermaritime', image: '/images/MET-Insurance-qqi9syabi0iv6s1bvc8egh1b75d2fqztaoxsd73d4s.png' },
    { title: 'Seedco', image: '/images/QIC-qqi9sxchoc4ickitci34isxcwyr6tkusq3nuqc9xbc.png' },
    { title: 'Meriblock Heights', image: '/images/sixt-qqi9sxchb6hkv62p0ttrvz9ulrhp81w2ykaavx4rb0.png' },
    { title: 'Ghana Insurers Association', image: '/images/Top-Up-Pharmacy-qqi9sz862072zsg31iwdnsga3qhx8z29ecytow74yw.png' },
    { title: 'Meriblock Heights', image: '/images/Untitled-1-qqi9sxchb6hkv62p0ttrvz9ulrhp81w2ykaavx4rb0.png' },
    { title: 'Ghana Insurers Association', image: '/images/VRA-qqi9swen4cgajk426bf5bhie0dmc0cscmfmten65h8.png' },
  ];

}
