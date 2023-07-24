import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Person } from 'src/app/Modules';

@Component({
  selector: 'app-formtable',
  templateUrl: './formtable.component.html',
  styleUrls: ['./formtable.component.css']
})
export class FormtableComponent {

  listOfData: Person [] = [
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    },
    {
      name: 'Faisal Tarar',
    }
   
  ];

  size: NzButtonSize = 'large';
  size2: NzButtonSize = 'default'
}
