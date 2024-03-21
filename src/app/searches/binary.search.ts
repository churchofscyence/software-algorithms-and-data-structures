export class BinarySearch {

  private _pointerHeader:number = 0;
  private _pointerMiddle:number = 0;
  private _pointerTail:number = 0;

  constructor() {
  }



  pointer(stepCount:number,element:number[],target:number):number[] {

      if(stepCount === 0){
        this._pointerHeader = 0;
        this._pointerTail =  element.length - 1;
      }

      this._pointerMiddle = this._pointerHeader + Math.floor(( this._pointerTail - this._pointerHeader) / 2);


      //Check if the target is found if the element is in the array
      if (element[this._pointerMiddle] === target){
        return [this._pointerMiddle];
      }else{
        return [this._pointerHeader, this._pointerMiddle, this._pointerTail];
      }
  }


  get pointerHeader(): number {return this._pointerHeader;}
  set pointerHeader(value: number) {this._pointerHeader = value;}

  get pointerMiddle(): number {return this._pointerMiddle;}
  set pointerMiddle(value: number) {this._pointerMiddle = value;}

  get pointerTail(): number {return this._pointerTail;}
  set pointerTail(value: number) {this._pointerTail = value;}
}
