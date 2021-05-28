import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaCotacaoComponent } from './cria-cotacao.component';

describe('CriaCotacaoComponent', () => {
  let component: CriaCotacaoComponent;
  let fixture: ComponentFixture<CriaCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaCotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
