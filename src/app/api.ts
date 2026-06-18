import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = 'https://raw.githubusercontent.com/ritzyeg/Hostel-Hub/refs/heads/main/public/db.json';
  constructor(private http: HttpClient) {}
  gethostels() {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.hostels)
    );
  }
  getHostelById(id: number) {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.hostels.find((hostel: any) => hostel.id == id))
    );
  }
}