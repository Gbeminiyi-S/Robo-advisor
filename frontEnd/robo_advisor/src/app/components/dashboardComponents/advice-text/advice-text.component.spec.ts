import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceTextComponent } from './advice-text.component';

describe('AdviceTextComponent', () => {
  let component: AdviceTextComponent;
  let fixture: ComponentFixture<AdviceTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdviceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
