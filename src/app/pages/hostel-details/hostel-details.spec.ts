import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelDetails } from './hostel-details';

describe('HostelDetails', () => {
  let component: HostelDetails;
  let fixture: ComponentFixture<HostelDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostelDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(HostelDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
