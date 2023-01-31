import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeinekenComponent } from './heineken.component';

describe('HeinekenComponent', () => {
  let component: HeinekenComponent;
  let fixture: ComponentFixture<HeinekenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeinekenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeinekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
