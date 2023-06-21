import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return[
      {name:'Anil',age:28},
      {name:'Ram',age:26}
   ]
  
  }
}
