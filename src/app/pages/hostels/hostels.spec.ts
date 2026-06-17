import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hostels } from './hostels';

describe('Hostels', () => {
  let component: Hostels;
  let fixture: ComponentFixture<Hostels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hostels],
    }).compileComponents();

    fixture = TestBed.createComponent(Hostels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
