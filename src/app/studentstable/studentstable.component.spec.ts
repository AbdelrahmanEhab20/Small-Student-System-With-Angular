import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentstableComponent } from './studentstable.component';

describe('StudentstableComponent', () => {
  let component: StudentstableComponent;
  let fixture: ComponentFixture<StudentstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
