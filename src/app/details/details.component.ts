import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles : [`
    .oncolor {
      color : white;
    }
  `]
})
export class DetailsComponent implements OnInit {

  message = 'Secret Password = tuna';
  show = true;
  messages = '';
  counter = [];
  logStatus: string = 'offcolor';

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onUpdateMessage(event: Event){
    this.message = (<HTMLInputElement>event.target).value;
  }

  toggle(){
    this.show = !this.show;
    // this.counter.push(this.counter.length + 1);
    this.counter.push(new Date());
    if ((this.counter.length) >= 5){
      this.logStatus = 'oncolor';
    } else{
      this.logStatus = 'offcolor';
    }
  }

}
