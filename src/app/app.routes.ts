import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ConstructionComponent } from './construction/construction.component';
import { FirmProfileComponent } from './firm-profile/firm-profile.component';
import { LeadershipComponent } from './leadership/leadership.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, title: 'Spektra Global - Home' },
    { path: 'about', component: AboutPageComponent, title: 'Spektra Global - About' }, // Route for home page
    { path: 'services', component: ServicesPageComponent, title: 'Spektra Global - Services' },
    { path: 'projects', component: ProjectsPageComponent, title: 'Spektra Global - Projects' },
    { path: 'projects/commercial', component: CommercialComponent, title: 'Spektra Global - Projects|Commercial' },
    { path: 'projects/construction', component: ConstructionComponent, title: 'Spektra Global - Projects|Construction' },
    { path: 'about/firm-profile', component: FirmProfileComponent, title: 'Spektra Global - About|Frim Profile' },
    { path: 'about/leadership', component: LeadershipComponent, title: 'Spektra Global - About|Leadership' },
];