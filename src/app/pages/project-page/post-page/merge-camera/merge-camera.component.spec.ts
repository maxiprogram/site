import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeCameraComponent } from './merge-camera.component';

describe('MergeCameraComponent', () => {
  let component: MergeCameraComponent;
  let fixture: ComponentFixture<MergeCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeCameraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
