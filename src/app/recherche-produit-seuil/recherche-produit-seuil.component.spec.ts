import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheProduitSeuilComponent } from './recherche-produit-seuil.component';

describe('RechercheProduitSeuilComponent', () => {
  let component: RechercheProduitSeuilComponent;
  let fixture: ComponentFixture<RechercheProduitSeuilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheProduitSeuilComponent]
    });
    fixture = TestBed.createComponent(RechercheProduitSeuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
