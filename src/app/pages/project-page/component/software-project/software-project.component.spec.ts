import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProjectComponent } from './software-project.component';

describe('SoftwareProjectComponent', () => {
  let component: SoftwareProjectComponent;
  let fixture: ComponentFixture<SoftwareProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
