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
      element: [9, 8, 2, 4, 1],
      target: 8,
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
