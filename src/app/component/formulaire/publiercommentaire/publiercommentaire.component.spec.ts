import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliercommentaireComponent } from './publiercommentaire.component';

describe('PubliercommentaireComponent', () => {
  let component: PubliercommentaireComponent;
  let fixture: ComponentFixture<PubliercommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubliercommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliercommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
