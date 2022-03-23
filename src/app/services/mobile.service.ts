import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() {
    alert("Mobile Services Constructor");
  }
  isValidMobile(mobile: string): boolean {
    //Logic For Check
    return true;
  }
}
