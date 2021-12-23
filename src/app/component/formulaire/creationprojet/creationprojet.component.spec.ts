import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationprojetComponent } from './creationprojet.component';

describe('CreationprojetComponent', () => {
  let component: CreationprojetComponent;
  let fixture: ComponentFixture<CreationprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
