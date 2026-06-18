import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Navbar } from './ui/navbar/navbar';
import { Footer } from "./ui/footer/footer";
@Component({
  selector: 'app-root',
  imports: [FormsModule, Navbar, RouterOutlet, Footer],//RouterOutlet used to be only there intially
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hostel-app');
  
}
