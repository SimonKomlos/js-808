import { Component } from '@angular/core';

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

}
