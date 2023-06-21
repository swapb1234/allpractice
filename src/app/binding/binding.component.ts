import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  todaysDay:string="Sunday";
  listOfTech:string[] = ["Angular","Html","CSS","JavaScript","Bootstrap"];

}
