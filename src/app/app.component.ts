import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CanvasModel } from './models/CanvasModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Structures and Algorithms';

  /** Template reference to the canvas element */
  @ViewChild('canvasEl') canvasEl!: ElementRef;

  /** Canvas 2d context */
  private context!: CanvasRenderingContext2D|null;

  constructor() {}

  ngAfterViewInit() {

    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

    this.draw();
  }

  /**
   * Draws something using the context we obtained earlier on
   */
  private draw() {
    if(this.context != null){
      this.context.font = '30px Arial';
      this.context.textBaseline = 'middle';
      this.context.textAlign = 'center';

      const x = (this.canvasEl.nativeElement as HTMLCanvasElement).width / 2;
      const y = (this.canvasEl.nativeElement as HTMLCanvasElement).height / 2;
      this.context.fillText('Angular Canvas', x, y);

      this.context .beginPath();
      this.context.lineWidth = 5;
      this.context.strokeStyle = "red";
      this.context .rect(x, y + 30, 150, 100);
      this.context .stroke();
    }
  }

  onNext(){
    alert("Next button was clicked!");
  };

  onNavigate( item: string){
    alert( item + " navigation button was clicked!");
  };




}
