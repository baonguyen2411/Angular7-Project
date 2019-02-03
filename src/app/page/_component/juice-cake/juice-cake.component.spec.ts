import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiceCakeComponent } from './juice-cake.component';

describe('JuiceCakeComponent', () => {
  let component: JuiceCakeComponent;
  let fixture: ComponentFixture<JuiceCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuiceCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiceCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
