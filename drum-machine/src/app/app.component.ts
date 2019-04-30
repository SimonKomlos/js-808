import { Component } from '@angular/core';
//Using jQuery to save on time
import * as $ from 'jquery';

export interface Sequence {
  name: string;
  id: number;
  instruments: object;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bpm:number=60;
  beat:number=0;

  selectedSequence:any;
  sequences: Sequence[] = [
    {
      name: "Sequence #1",
      id: 0,
      instruments: [
        {
          name: "Kick",
          steps: [0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1]
        },
        {
          name: "Snare",
          steps: [0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1]
        },
        {
          name: "Open Hat",
          steps: [1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1]
        },
        {
          name: "Crash",
          steps: [1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1]
        },
      ]
    }
  ]

  ngOnInit() {
    this.selectedSequence = this.sequences[0].instruments;
  }

  setSelectedSequence(val) {
    console.log(val)
    this.selectedSequence = this.sequences[val].instruments;
    console.log(this.selectedSequence)
  }

  play() {
    let speed = ((60/this.bpm)*4);
    this.beat = 0;
    let maxBeat = this.selectedSequence[0].steps.length;
    let timePeriod;
    clearInterval(timePeriod)
    timePeriod = setInterval(() => {
      $('.beat-square').removeClass("active");
      $('.beat-'+this.beat).addClass("active");
      this.beat++;
      if(this.beat > maxBeat) {
        this.beat = 0;
      }
    }, 100)
  }

}
