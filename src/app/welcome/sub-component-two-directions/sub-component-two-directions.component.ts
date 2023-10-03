import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub-component-two-directions',
  templateUrl: './sub-component-two-directions.component.html',
  styleUrls: ['./sub-component-two-directions.component.scss']
})
export class SubComponentTwoDirectionsComponent {
  @Input()
  variableReceptrice : string = "enfant-valeur-depart";
  @Output()
  variableReceptriceChange = new EventEmitter<string>();

  changerMessage(){
    this.variableReceptrice = "Message du parent modifié";
    this.variableReceptriceChange.emit(this.variableReceptrice);
  }
}
