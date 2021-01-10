import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  message = 'Secret Password = tuna';
  show = true;
  messages = [''];
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateMessage(event: Event){
    this.message = (<HTMLInputElement>event.target).value;
  }

  toggle(){
    ++this.counter;
    this.show = !this.show;
    console.log("Button clicked!");
    this.messages.push(this.message);
    console.log("messages: " + this.messages + " " + this.counter);
  }

}
