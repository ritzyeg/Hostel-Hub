import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from './ui/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [FormsModule,Navbar,RouterOutlet],//RouterOutlet used to be there intially
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hostel-app');
  
}
