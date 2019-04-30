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

  bpm:number=128;
  beat:number=1;

  timeInterval:any;

  isPlaying:boolean=false;
  isPaused:boolean=false;

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
    },
    {
      name: "Sequence #2",
      id: 1,
      instruments: [
        {
          name: "Kick",
          steps: [1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1]
        },
        {
          name: "Snare",
          steps: [0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0]
        },
        {
          name: "Open Hat",
          steps: [0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1]
        },
        {
          name: "Crash",
          steps: [1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0]
        },
        {
          name: "Cowbell",
          steps: [0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1]
        },
      ]
    },
    {
      name: "Sequence #3",
      id: 2,
      instruments: [
        {
          name: "Kick",
          steps: [1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0]
        },
        {
          name: "Snare",
          steps: [0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0]
        },
        {
          name: "Open Hat",
          steps: [1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0]
        },
      ]
    }
  ]

  ngOnInit() {
    this.selectedSequence = this.sequences[0].instruments;
  }

  setSelectedSequence(val) {
    this.selectedSequence = this.sequences[val].instruments;
    this.stop();
  }

  play() {
    let speed = ((60/this.bpm)*4)/8;
    this.isPlaying = true;
    this.isPaused = false;
    let maxBeat = this.selectedSequence[0].steps.length;
    this.timeInterval = setInterval(() => {
      $('.beat-square').removeClass("active");
      $('.beat-'+this.beat).addClass("active");
      this.beat++;
      if(this.beat > maxBeat) {
        this.beat = 1;
      }
      //I'm not entirely sure how bpm works converted in milliseconds so I'm multiplying
      //it by 1000 to get the bpm into seconds. This might be wrong. I'm
      //not confident. I'd have to do more research into time signatures
    }, speed*1000)
  }

  pause() {
    this.isPlaying = false;
    this.isPaused = true;
    clearInterval(this.timeInterval)
  }

  stop() {
    this.isPlaying = false;
    this.isPaused = false;
    $('.beat-square').removeClass("active");
    clearInterval(this.timeInterval)
    this.beat = 1;
  }

}
