import { Component, NgModule } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { FlatNode, TreeNode } from 'src/app/Modules';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';

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

const TREE_DATA: TreeNode[] = [
  {
    name: 'Page',
    children: [
      {
        name: 'Page Header',
        children: [{ name: 'Header' }]
      },
      {
        name: 'Page Body',
        children: [
          {
            name: 'Sections',
            children: [
              {
                name: 'Header',
                children: [{ name: 'Sub-Header' }]
              },
              {
                name: 'Body',
                children: [{ name: 'First Name' }, { name: 'Last Name' }, { name: 'Email' }]
              }
            ]
          },
          {
            name: 'Sections',
            children: [{
              name: 'Header',
              children: [{ name: 'Sub-Header' }]
            },
            {
              name: 'Body',
              children: [{ name: 'Address' }, { name: 'Location' }, { name: 'Country' }]
            }]
          }
        ]
      },
      {
        name: 'Page Footer',
        children: [{ name: 'leaf' }]
      },

    ]
  }
];



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

  // for nztree 

  private transformer = (node: TreeNode, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    disabled: !!node.disabled
  });
  selectListSelection = new SelectionModel<FlatNode>(true);

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.setData(TREE_DATA);
    this.treeControl.expandAll();
  }

  hasChild = (_: number, node: FlatNode): boolean => node.expandable;
  
  
  smallsize: NzButtonSize = 'small';
  largesize: NzButtonSize = 'large';
  sized: NzButtonSize = 'default'
}
