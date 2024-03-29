import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { AlgorithmEnum } from './enumerates/algorithm.enum';
import {InitializeEnum} from './enumerates/initialize.enum';
import {GraphModel} from './models/graph.model';
import { AlgorithmService } from './services/algorithm.service';

import { UtilService } from './services/util.service';

import { BinarySearch } from './searches/binary.search';

type AlgorithmData = {
  element: number[],
  target: number,
  setupType:string[],
  setupValues:[{
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
  }]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Structures and Algorithms';
  currentAlgorithm = "Algorithm";

  /** Form Input Values **/
  arrayList:string = "";
  targetValue:string = "";

  message:string = "";
  messageType:string = "";

  algorithmData! : AlgorithmData;
  binarySearch! : BinarySearch | null;

  /** Template reference to the canvas element */
  @ViewChild('canvasEl') canvasEl!: ElementRef;

  /** Canvas 2d context */
  public canvas! :HTMLCanvasElement | null;
  public context!: CanvasRenderingContext2D | null;
  public graphModel!: GraphModel;

  Algorithm = AlgorithmEnum;
  algorithmService : AlgorithmService = new AlgorithmService();
  utilService: UtilService = new UtilService();

  /*
   * Each time the Next Button is clicked, this number is incremented
   */
  numNext:number = 0;

  constructor () {
  }

  ngAfterViewInit() {
    this.canvas = (this.canvasEl.nativeElement as HTMLCanvasElement);
    this.context = this.canvas.getContext('2d');
  };

  initializeCanvas(){

    this.arrayList = this.algorithmData.element.join();
    this.targetValue = this.algorithmData.target.toString();

    //Switch statement to determine what to initialize on the canvas
    for(const[index,element] of this.algorithmData.setupType.entries()){
      console.log("[" + index + "] " + element);
      switch(element){
        case InitializeEnum.MANY_HORIZONTAL_RECTANGLE:

          //drawManyHorizontalRec(50, 50, [9, 8, 2, 4, 1], 100, 100, "red");
          this.graphModel.drawManyHorizontalRec(
                this.algorithmData.setupValues[index].x,
                this.algorithmData.setupValues[index].y,
                this.algorithmData.element,
                this.algorithmData.setupValues[index].width,
                this.algorithmData.setupValues[index].height,
                this.algorithmData.setupValues[index].color
          );

          break;
        default:
        // code block
      }

    }
  };



  clear(){
    if(this.context != null && this.canvas != null){
      this.context.fillStyle = "white";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    }
  }

  onClear(){
    this.clear();
    this.messageType = "";
    this.message = "";
    this.arrayList = "";
    this.targetValue = "";
    this.currentAlgorithm = "Algorithm";
    this.numNext  = 0;

    this.binarySearch = null;
  };

  onNavigate( item: string){
    console.log( "The "+item + " navigation button was clicked!");
    this.currentAlgorithm = item;

    this.algorithmData = this.algorithmService.get(item);
    console.log( JSON.stringify ( this.algorithmData ) );

    this.graphModel = new GraphModel(item, this.canvas, this.context);

    this.initializeCanvas()

  };


  onNext(){
    console.log("Next button was clicked!");

    this.clear();

    if( !this.onMessage() ){
      this.initializeCanvas();

      if(this.binarySearch == null){
        this.binarySearch = new BinarySearch(this.algorithmData.element, this.algorithmData.target);
      }

      switch(this.currentAlgorithm){
        case AlgorithmEnum.SEARCH_BINARY_POINT:

          let result = this.binarySearch.pointer(this.numNext);

          if(result.length == 0 ){
            this.messageType = 'alert alert-success';
            this.message = "Target Value was not found";
          } else if (result.length == 1 ){
            this.messageType = 'alert alert-success';
            this.message = "Target Value found at index " + result[0];
            this.graphModel.drawManyHorizontalPointer( result, ["Middle"],[0]);
          }else{
            this.graphModel.drawManyHorizontalPointer( result, ["Header", "Middle","Tail"],[0,150,300]);
          }
          break;

        case AlgorithmEnum.SORT_BUBBLE:

          break;


        default:
        // code block
      }
    }

    this.numNext++;

  };

  onMessage(){
    this.messageType = "";
    this.message = "";
    let isError = false;
    const regex = /^-?\d+$/;

    let checkArrayList =  this.utilService.convertToNumberArray(this.arrayList);

    if( ! regex.test( this.targetValue) ){
      this.messageType = 'alert alert-danger';
      this.message = "Target Value must be a integer";
      isError = true;
    }else{
      this.algorithmData.target = parseInt(this.targetValue);
    }
    if(checkArrayList.length == 0){
      this.messageType = 'alert alert-danger';
      this.message = "Array List must be a numbers separated by commas";
      isError = true;
    }else{
      this.algorithmData.element = checkArrayList;
    }

    if(!isError){
      this.messageType = 'alert alert-success';
      this.message = "Array List and Target Value are valid";
    }

    return isError;

  };

  arrayListFocusout(){
    console.log("ArrayList was focusout!");
    //alert("ArrayList was focusout!");
  };

  targetValueFocusout() {
    console.log("Target Value was focusout!");
    //alert("Target Value was focusout!");

  };


}
