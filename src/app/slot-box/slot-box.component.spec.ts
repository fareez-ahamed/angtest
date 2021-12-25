import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBoxComponent } from './slot-box.component';

describe('SlotBoxComponent', () => {
  let component: SlotBoxComponent;
  let fixture: ComponentFixture<SlotBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
