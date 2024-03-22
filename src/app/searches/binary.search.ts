export class BinarySearch {

  //POINTERS
  private _head:number = 0;
  private _middle:number = 0;
  private _tail:number = 0;

  constructor() {
  }

  calculateMiddle(head:number,tail:number,){
    return head + Math.floor(( tail - head) / 2);
  }

  pointer(stepCount:number,element:number[],target:number):number[] {

      if(stepCount === 0){
        this._head = 0;
        this._tail =  element.length - 1;
        this._middle = this.calculateMiddle(this._head,this._tail);

        return [this._head, this._middle, this._tail];
      }

      //Check if the target is found if the element is in the array
      if (element[this._middle] === target){
        return [this._middle];
      }else{

        if(this._middle > target){
          this._head = this._middle + 1;
        }else{
          this._tail = this._middle - 1;
        }

        this._middle = this.calculateMiddle(this._head,this._tail);

        return [this._head, this._middle, this._tail];
      }
  }

  get head(): number {return this._head;}
  set head(value: number) {this._head = value;}

  get middle(): number {return this._middle;}
  set middle(value: number) {this._middle = value;}

  get tail(): number {return this._tail;}
  set tail(value: number) {this._tail = value;}
}
