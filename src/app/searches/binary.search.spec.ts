import { TestBed } from '@angular/core/testing';
import { BinarySearch } from "./binary.search";

describe('BinarySearch', () => {
 /*
  * The stepCount is number of the iteration in the Binary Search.
  */

  let binarySearch:BinarySearch;
  let element:number[];
  let target:number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: []
    }).compileComponents();

    binarySearch = new BinarySearch();
    element = [2,3,4,10,40];


  });

  it('should be true because binarySearch is not null', () => {
    expect(binarySearch).not.toBeNull();
  });

  it('should be true because the target (4) and stepCount (0) is found and the result is index Middle = 2', () => {

    target = 4;
    let result = binarySearch.pointer(0,element,target);

    expect(result).toEqual([2]);

  });


});
