import { Component } from '@angular/core';
import {Api} from '../../api';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Card} from '../../ui/card/card';
@Component({
  selector: 'app-hostels',
  imports: [FormsModule,Card],
  templateUrl: './hostels.html',
  styleUrl: './hostels.css',
})
export class Hostels {
  hostels:any[]=[];
  constructor(private Api:Api,private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
  console.log('ngOnInit running');

  this.Api.gethostels().subscribe({
    next: (data: any) => {
      console.log('DATA RECEIVED:', data);
      this.hostels = data as any[];
      this.cdr.detectChanges();
      console.log('HOSTELS LENGTH:', this.hostels.length);
    },
    error: (err: any) => {
      console.error('API ERROR:', err);
    }
  }); 
}
 searchText: string ='';
 get filteredHostels() {
  return this.hostels.filter(h =>
    h.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    h.location.toLowerCase().includes(this.searchText.toLowerCase()) ||
    h.city.toLowerCase().includes(this.searchText.toLowerCase())
  );
 }
}
