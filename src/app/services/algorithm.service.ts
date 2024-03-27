import { Injectable } from '@angular/core';

import { AlgorithmEnum } from '../enumerates/algorithm.enum';
import { InitializeEnum } from '../enumerates/initialize.enum';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  private _context = new Map();

  constructor() {
    this._context.set(AlgorithmEnum.SEARCH_BINARY_POINT, {
      element: [0,10,20,30,40,50,60],
      target: 20,
      setupType:[InitializeEnum.MANY_HORIZONTAL_RECTANGLE],
      setupValues:[{
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        color: 'red',
      }]
    });
  }

  public get(key: string): any {
    return this._context.get(key);
  }

  public set(key: string, value: any): void {
    this._context.set(key, value);
  }

  public remove(key: string): void {
    this._context.delete(key);
  }

}
