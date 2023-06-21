import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {
   firstname:string="swapnil";
   Mobile:number=8978974892;
   msg:string="How are you";
   fnem:string="vihan";
   todayDate=new Date;
   price:number=1000;
   personalObj : any = {
    fName:"Rohit",
    mobileNo:8989898989
    
   }
   displayMessage(){
    console.log("Hello")
  }
   
}
