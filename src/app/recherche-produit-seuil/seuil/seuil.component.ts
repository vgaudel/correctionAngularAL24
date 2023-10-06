import { Component } from '@angular/core';
import { ProduitService } from 'src/app/common/services/produit.service';

@Component({
  selector: 'app-seuil',
  templateUrl: './seuil.component.html',
  styleUrls: ['./seuil.component.scss']
})
export class SeuilComponent {

  public seuilMax=100; //à saisir

  constructor(private _produitService : ProduitService) { }

  onSeuilChange(){
    this._produitService.changerSeuil(this.seuilMax);
  }
}
