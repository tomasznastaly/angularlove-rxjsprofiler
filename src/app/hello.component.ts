import { Component, Input } from '@angular/core';
import { Streams }  from './streams.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor(private streams: Streams) {}

  ngOnInit() {
    this.streams.getTodos().subscribe();
    this.streams.behaviorSubject.subscribe();
  }
}
