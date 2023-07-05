import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinBallComponent } from './pin-ball.component';

describe('PinBallComponent', () => {
  let component: PinBallComponent;
  let fixture: ComponentFixture<PinBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinBallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
