import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEventComponent } from './info-event.component';

describe('InfoEventComponent', () => {
  let component: InfoEventComponent;
  let fixture: ComponentFixture<InfoEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
