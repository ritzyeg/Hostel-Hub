import { ChangeDetectorRef, Component } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Api} from '../../api'; 

@Component({
  selector: 'app-hostel-details',
  templateUrl: './hostel-details.html',
  styleUrls: ['./hostel-details.css']
})
export class HostelDetails {

  hostel: any;
  hostelId: any;

  constructor(
    private api: Api,
    private cdr: ChangeDetectorRef,
    private ar: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.hostelId = this.ar.snapshot.params['id'];
    this.api.getHostelById(this.hostelId).subscribe((res: any) => {
      console.log('API Response',res);
      this.hostel = res;
      this.cdr.detectChanges();
    });
  }
  goBack() {
  this.router.navigate(['/hostels']);
}
}