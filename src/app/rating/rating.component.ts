import { Component, Input, OnInit } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  stars=[1,2,3,4,5 ];
  @Input() rate=0;
  // @output() ratingChanged= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }
  onChangeRate(newRate:number){
    this.rate=newRate
  }
}
