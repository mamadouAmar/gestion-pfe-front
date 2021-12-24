import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiserReunionComponent } from './organiser-reunion.component';

describe('OrganiserReunionComponent', () => {
  let component: OrganiserReunionComponent;
  let fixture: ComponentFixture<OrganiserReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganiserReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiserReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
