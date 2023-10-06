import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-sub-component-mono-direction',
  templateUrl: './sub-component-mono-direction.component.html',
  styleUrls: ['./sub-component-mono-direction.component.scss']
})
export class SubComponentMonoDirectionComponent {

  @Input()
  variableReceptrice : string = "enfant-valeur-depart";

  @Input()
  secondeVariableReceptrice : number = 0;

}
