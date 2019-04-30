import { Component } from '@angular/core';

export interface Sequence {
  name: string;
  id: number;
  instrument: object;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sequences: Sequence[] = [
    {
      name: "Sequence #1",
      id: 1,
      instrument: [
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
          name: "Closed Hat",
          steps: [1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1]
        },
      ]
    }
  ]


}
