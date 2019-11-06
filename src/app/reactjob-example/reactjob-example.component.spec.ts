import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactjobExampleComponent } from './reactjob-example.component';

describe('ReactjobExampleComponent', () => {
  let component: ReactjobExampleComponent;
  let fixture: ComponentFixture<ReactjobExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactjobExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactjobExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
