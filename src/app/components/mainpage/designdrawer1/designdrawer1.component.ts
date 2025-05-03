import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { Drawer, Person, icon } from 'src/app/Modules';

@Component({
  selector: 'app-designdrawer1',
  templateUrl: './designdrawer1.component.html',
  styleUrls: ['./designdrawer1.component.css']
})
export class Designdrawer1Component {

  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  value = 'ng';

  constructor(private drawerService: NzDrawerService) {}

  menu: Drawer [] = [
    { name: 'Font Design',
      active: false,
      bgcolor: '#2563EB',
      color: '#2563EB',
      textcolor: '#27292D',
      activbgcolor: '#000',
      hovertextcolor: "#70AAFF",
      textsize: '#000'
    }
  ]
  icons: icon [] = [
    { 
      active: false,
      iconcolor: '#2563EB',
      hovericoncolor: '#2563EB',
      activeiconcolor: '#27292D',
      iconsize: '#000',
    }
  ]
  openTemplate(): void {
    const drawerRef = this.drawerService.create({
      nzExtra: 'Menu Design',
      nzWidth: '800px',
      nzContent: this.drawerTemplate,
      nzContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });

    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }
  size: NzButtonSize = 'large';
  size2: NzButtonSize = 'small'
}
