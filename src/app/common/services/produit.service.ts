import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, mergeMap, of, toArray } from 'rxjs';

export interface MonProduit {
  numero: number;
  label: string;
  prix: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private bsSeuilMaxi = new BehaviorSubject<number>(100);

  private tabProduit = [
    { numero: 5, label: "produit 5", prix: 120 },
    { numero: 1, label: "produit 1", prix: 50 },
    { numero: 2, label: "produit 2", prix: 30 },
    { numero: 3, label: "produit 3", prix: 80 },
    { numero: 4, label: "produit 4", prix: 500 },
    { numero: 6, label: "produit 6", prix: 20 },
  ]

  public get seuilMaxiObservable(): Observable<number> {
    return this.bsSeuilMaxi;
  }

  public changerSeuil(nouveauSeuilMaxi: number) {
    this.bsSeuilMaxi.next(nouveauSeuilMaxi);
    //l'appel à next(90_ou_80)
    //va provoquer le rédéclenchement de toutes les callbacks 
    //(dans tous les composants)
  }

  public rechercherNombreProduitSimu$(prixMaxi: number): Observable<number> {
    return this.rechercherProduitSimu$(prixMaxi).pipe(
      map(tabProd => tabProd.length)
    );
  }

  public rechercherProduitSimu$(prixMaxi: number): Observable<MonProduit[]> {

    return of(this.tabProduit)
      .pipe(
        mergeMap(pInTab => pInTab),
        filter((p) => p.prix <= prixMaxi),
        toArray(),
        map(tabP => tabP.sort((p1, p2) => p1.prix - p2.prix))
      );
  }

  constructor() { }
}
