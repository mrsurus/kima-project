import { Component, NgModule } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';

const options = [
  {
    value: 'Finance',
    label: 'Finance',
    children: [
      {
        value: 'Accounts',
        label: 'Accounts',
        children: [
          {
            value: 'Add Invoice',
            label: 'Add Invoice',
            isLeaf: true
          }
        ]
      },
    ]
  },
  {
    value: 'Human Resources',
    label: 'Human Resources',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      }
    ]
  },
  {
    value: 'Governance',
    label: 'Governance'
  }
];

// for nz tree



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})




export class MainpageComponent {



  visible = false

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  nzOptions: NzCascaderOption[] = options;
  values: string[] | null = null;

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }


  
  smallsize: NzButtonSize = 'small';
  largesize: NzButtonSize = 'large';
  sized: NzButtonSize = 'default'
}
