import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftIconeBarComponent } from './components/left-icone-bar/left-icone-bar.component';
import {NzDividerModule} from 'ng-zorro-antd/divider'
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { Routes } from '@angular/router';
import { WebHomeModule } from './components/mainpage/web-home/web-home.module';
import { TreemenuComponent } from './components/mainpage/treemenu/treemenu.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Designdrawer1Component } from './components/mainpage/designdrawer1/designdrawer1.component';
import { Designdrawer2Component } from './components/mainpage/designdrawer2/designdrawer2.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SearchComponent } from './components/search/search.component';

registerLocaleData(en);

// const routes : Routes =[
//   {
//     path: '', 
//     loadChildren: () => import('./components/mainpage/web-home/web-home.module').then(x=>x.WebHomeModule)
//   },
// ]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftIconeBarComponent,
    MainpageComponent,
    TreemenuComponent,
    Designdrawer1Component,
    Designdrawer2Component,
    LoginComponent,
    MenuComponent,
    NotificationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzI18nModule,
    NzDividerModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzCascaderModule,
    NzDropDownModule,
    NzTreeViewModule,
    NzCheckboxModule,
    NzCardModule,
    NzDrawerModule,
    WebHomeModule,
    NzInputModule,
    NzFormModule,
    NzCollapseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
