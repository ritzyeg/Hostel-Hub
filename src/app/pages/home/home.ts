import { Component } from '@angular/core';
import { Carousel } from '../../ui/carousel/carousel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  constructor(private router: Router) {}

goToHostels() {
  this.router.navigate(['/hostels']);
}
}
