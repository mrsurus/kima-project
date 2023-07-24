import { Component } from '@angular/core';
import { ChartData } from 'src/app/Modules';

@Component({
  selector: 'app-gridtable',
  templateUrl: './gridtable.component.html',
  styleUrls: ['./gridtable.component.css']
})
export class GridtableComponent {

  abcd: ChartData [] = [
    {
      id: 3 ,
      subject: 'Demo10-demo',
      requsterName: 'Shawon Adams',
      createdDate: '01/07/19, 6.00 pm',
      status: 'Closed',
      priority: 'Low' ,
      assignTo: 'Gerald Battel' 
     },
    {
      id: 3 ,
      subject: 'Demo10-demo',
      requsterName: 'Shawon Adams',
      createdDate: '01/07/19, 6.00 pm',
      status: 'Closed',
      priority: 'Low' ,
      assignTo: 'Gerald Battel' 
     },
    {
      id: 3 ,
      subject: 'Demo10-demo',
      requsterName: 'Shawon Adams',
      createdDate: '01/07/19, 6.00 pm',
      status: 'Closed',
      priority: 'Low' ,
      assignTo: 'Gerald Battel' 
     },
    {
      id: 3 ,
      subject: 'Demo10-demo',
      requsterName: 'Shawon Adams',
      createdDate: '01/07/19, 6.00 pm',
      status: 'Closed',
      priority: 'Low' ,
      assignTo: 'Gerald Battel' 
     },
    {
      id: 3 ,
      subject: 'Demo10-demo',
      requsterName: 'Shawon Adams',
      createdDate: '01/07/19, 6.00 pm',
      status: 'Closed',
      priority: 'Low' ,
      assignTo: 'Gerald Battel' 
     },
    {
      id: 3 ,
      subject: 'Demo10-demo',
      requsterName: 'Shawon Adams',
      createdDate: '01/07/19, 6.00 pm',
      status: 'Closed',
      priority: 'Low' ,
      assignTo: 'Gerald Battel' 
     },
    
   
  ];
  checked = true;
}
