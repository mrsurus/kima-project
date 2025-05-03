import { Component } from '@angular/core';
import {  Person } from 'src/app/Modules';

@Component({
  selector: 'app-dashbordbar',
  templateUrl: './dashbordbar.component.html',
  styleUrls: ['./dashbordbar.component.css']
})



export class DashbordbarComponent {

  listOfnamesfirst: Person[]= [
        { name: 'Alerts' },
        { name: 'Placeholder' },
        { name: 'Lightbox' },
        { name: 'Buttons' },
        { name: 'Progress Bars' },
        { name: "Range Slider" },
        { name: 'Cards' },
        { name: "Tabs & Accordions" },
        { name: "Sweet Alert" },
  ]

  listOfnamessecond: Person[] = [
        { name: 'Carousel' },
        { name: 'Typography' },
        { name: "Rating" },
        { name: 'Dropdowns' },
        { name: 'Video' },
        { name: 'notifications' },
        { name: 'Grid' },
  ]

  listOfnamesthird: Person[] = [
        { name: 'General' },
        { name: 'Swipe Slider' },
        { name: 'Images' },
        { name: 'Colors' },
        { name: 'Modals' },
        { name: 'Utilities' },
        { name: 'Offcanvas' }
  ]


}
