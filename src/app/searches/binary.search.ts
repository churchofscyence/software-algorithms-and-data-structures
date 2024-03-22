export class BinarySearch {

  //POINTERS
  private _head:number = 0;
  private _middle:number = 0;
  private _tail:number = 0;

  private _element:number[];
  private _target:number;

  private _stepCount?:number;

  constructor(element:number[],target:number) {
    this._element = element;
    this._target = target;
  }

  calculateMiddle(head:number,tail:number,){
    return head + Math.floor(( tail - head) / 2);
  }

  checkMiddle():number[]{
    if(this._target === this._element[this._middle]){
      return [this._middle];
    }else {
      return [this._head, this._middle, this._tail];
    }
  }

  pointer(stepCount:number):number[] {

    //TODO: maybe can be deleted
    this._stepCount = stepCount;

    if(stepCount === 0){
        this._head = 0;
        this._tail =  this._element.length - 1;
        this._middle = this.calculateMiddle(this._head,this._tail);
    }else if(stepCount >this._element.length/2){
      //How iterations to find the middle?
      return [];//TODO: Fix where the middle is not found
    }else{

    }

    return this.checkMiddle();


  }

  get head(): number {return this._head;}
  set head(value: number) {this._head = value;}

  get middle(): number {return this._middle;}
  set middle(value: number) {this._middle = value;}

  get tail(): number {return this._tail;}
  set tail(value: number) {this._tail = value;}

  get element(): number[] {return this._element;}
  set element(value: number[]) {this._element = value;}

  get target(): number {return this._target;}
  set target(value: number) {this._target = value;}

  get stepCount(): number|undefined {return this._stepCount;}
  set stepCount(value: number|undefined) {this._stepCount = value;}

}
