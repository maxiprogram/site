import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowheadrunComponent } from './yellowheadrun.component';

describe('YellowheadrunComponent', () => {
  let component: YellowheadrunComponent;
  let fixture: ComponentFixture<YellowheadrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowheadrunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowheadrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
