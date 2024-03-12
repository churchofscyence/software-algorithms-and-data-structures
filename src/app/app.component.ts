import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { AlgorithmEnum } from './enumerates/algorithm.enum';
import {InitializeEnum} from './enumerates/initialize.enum';
import {GraphModel} from './models/graph.model';
import { AlgorithmService } from './services/algorithm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Structures and Algorithms';
  currentAlgorithm = "Algorithm";

  /** Template reference to the canvas element */
  @ViewChild('canvasEl') canvasEl!: ElementRef;

  /** Canvas 2d context */
  public canvas! :HTMLCanvasElement | null;
  public context!: CanvasRenderingContext2D | null;
  public graphModel!: GraphModel;

  Algorithm = AlgorithmEnum;
  algorithmService : AlgorithmService = new AlgorithmService();
  contextData = {};

  constructor () {
  }

  ngAfterViewInit() {

    this.canvas = (this.canvasEl.nativeElement as HTMLCanvasElement);
    this.context = this.canvas.getContext('2d');

  }

  onClear(){
    if(this.context != null && this.canvas != null){
      this.context.fillStyle = "white";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.currentAlgorithm = "Algorithm";
    }
  }

  onNavigate( item: string){
    console.log( "The "+item + " navigation button was clicked!");
    this.currentAlgorithm = item;

    this.contextData = this.algorithmService.get(item);

    console.log( JSON.stringify ( this.contextData ) );
    this.graphModel = new GraphModel(item, this.canvas, this.context);

    //Switch statement to determine what to initialize on the canvas
    // @ts-ignore
    let setupType:any = this.contextData['setupType'];
    for(const[index,element] of setupType .entries()){
      console.log("[" + index + "] " + element);
      switch(element){
        case InitializeEnum.MANY_HORIZONTAL_RECTANGLE:
          // @ts-ignore
          let element = this.contextData['element'];
          // @ts-ignore
          let setupValues = this.contextData['setupValues'];
          //drawManyHorizontalRec(50, 50, [1, 2, 3, 4, 5], 100, 50, "blue");
          this.graphModel.drawManyHorizontalRec(setupValues[index].x,
                                                setupValues[index].y,
                                                element,
                                                setupValues[index].width,
                                                setupValues[index].height,
                                                setupValues[index].color);
          break;
        default:
        // code block
      }

    }

  };


  onNext(){
    alert("Next button was clicked!");
  };






}
