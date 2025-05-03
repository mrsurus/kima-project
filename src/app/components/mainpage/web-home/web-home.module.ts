import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHomeComponent } from './web-home.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { GridtableComponent } from './gridtable/gridtable.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomesidebarComponent } from './homesidebar/homesidebar.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserModule } from '@angular/platform-browser';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { FormtableComponent } from './formtable/formtable.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DashbordbarComponent } from './dashbordbar/dashbordbar.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


const routes: Routes=[
  {
    path: '',
    component: GridtableComponent
  },
  {
    path: 'resolution',
    component: FormtableComponent
  }
]

@NgModule({
  declarations: [
    WebHomeComponent,
    GridtableComponent,
    TopbarComponent,
    HomesidebarComponent,
    FormtableComponent,
    DashbordbarComponent,
  ],

  imports: [
    CommonModule,
    BrowserModule,
    NzDropDownModule,
    NzButtonModule,
    NzTableModule,
    NzCheckboxModule,
    FormsModule,
    RouterModule.forChild(routes),
    NzIconModule,
    NzBreadCrumbModule

  ],
  exports: [
    WebHomeComponent,
    GridtableComponent,
    TopbarComponent,
    HomesidebarComponent
  ]
})
export class WebHomeModule { }
