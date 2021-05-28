import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizaCotacaoComponent } from './finaliza-cotacao.component';

describe('FinalizaCotacaoComponent', () => {
  let component: FinalizaCotacaoComponent;
  let fixture: ComponentFixture<FinalizaCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizaCotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizaCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
