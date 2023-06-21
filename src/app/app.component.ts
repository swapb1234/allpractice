import { Component,ElementRef } from '@angular/core';
import { UserdataService } from './service/userdata.service';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'project1';
  // data={
  //   name:'raju',
  // age:23
  // }
  //show=false
  title="Its angular service"
  TodaysDate=new Date()
  // constructor(ts:TestService){
  //   ts.callMockAPI()
  // }
  // users:any;
  // constructor(private userdata:UserdataService){
  //   console.warn('userdata',userdata.users)
  //   this.users=userdata.users();
  // }
  constructor(el:ElementRef){
    el.nativeElement.style.color='Blue'
  }
}

