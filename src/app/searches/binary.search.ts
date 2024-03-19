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

    this._pointerMiddle = Math.floor((this._pointerHeader + this._pointerTail) / 2);

    if(element[this._pointerMiddle] === target){
      return [this._pointerMiddle];
    }

    return [this._pointerHeader, this._pointerMiddle, this._pointerTail];

  }

}
