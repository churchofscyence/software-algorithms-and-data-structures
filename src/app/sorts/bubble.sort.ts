
export interface IIndexes{
  main:number;
  offset:number;
}


export class BubbleSort {



  private _element: number[];
  private _indexes:IIndexes[]=[] ;

  constructor(element: number[]) {
    this._element = element;
    this.generateIndexes();
  }

  generateIndexes(){
    for(let mainIndex = 0; mainIndex < this._element.length - 1; mainIndex++){
      for(let offsetIndex = 1 + mainIndex; offsetIndex < this._element.length; offsetIndex++){
        this._indexes.push({main:mainIndex, offset:offsetIndex});
      }

    }
  }

  swap(baseIndex: number, offsetIndex: number){
    let temp = this._element[baseIndex];
    this._element[baseIndex] = this._element[offsetIndex];
    this._element[offsetIndex] = temp;

  }

  ascendingOrder(baseIndex: number, offsetIndex: number){
    if(this._element[baseIndex] > this._element[offsetIndex]){
      this.swap(baseIndex, offsetIndex);
    }
  }

  modifiedAscendingOrder(stepNum:number){
    let step = this._indexes[stepNum];
    this.ascendingOrder(step.main, step.offset);
  }


  get element(): number[] {return this._element;}
  set element(value: number[]) {this._element = value;}


  get indexes(): IIndexes[] {return this._indexes;}
  set indexes(value: IIndexes[]) {this._indexes = value;}
}
