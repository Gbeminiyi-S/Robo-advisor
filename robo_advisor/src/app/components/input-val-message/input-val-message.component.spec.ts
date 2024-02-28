import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValMessageComponent } from './input-val-message.component';

describe('InputValMessageComponent', () => {
  let component: InputValMessageComponent;
  let fixture: ComponentFixture<InputValMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputValMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputValMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
