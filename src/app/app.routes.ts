import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Hostels} from './pages/hostels/hostels';
import {Contact} from './pages/contact/contact';
import { HostelDetails } from './pages/hostel-details/hostel-details';
export const routes: Routes = [
    {path:"",component: Home },
    { path: 'about', component: About },
    { path: 'hostels', component: Hostels },
    { path: 'contact', component: Contact },
    { path: 'hostel/:id', component: HostelDetails}
];
