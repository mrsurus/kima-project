import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';
import { BehaviorSubject } from 'rxjs';
import { FlatNode, TreeNode } from 'src/app/Modules';

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
  selector: 'app-treemenu',
  templateUrl: './treemenu.component.html',
  styleUrls: ['./treemenu.component.css']
})

export class TreemenuComponent {
 

  searchValue = '';
  searchValue$ = new BehaviorSubject(TREE_DATA);
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
  }

  hasChild = (_: number, node: FlatNode): boolean => node.expandable;
  
}
