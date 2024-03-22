import { TestBed } from '@angular/core/testing';
import { BinarySearch } from "./binary.search";

describe('BinarySearch', () => {
 /*
  * The stepCount is number of the iteration in the Binary Search.
  */

  let binaryMin:BinarySearch;
  let binaryMiddle:BinarySearch
  let binaryMax:BinarySearch;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: []
    }).compileComponents();

    binaryMin = new BinarySearch([0,10,20,30,40,50,60],0);
    binaryMiddle = new BinarySearch([0,10,20,30,40,50,60],30);
    binaryMax = new BinarySearch([0,10,20,30,40,50,60],60);

  });

  it('should be true because binarySearch is not null', () => {
    expect(binaryMin).not.toBeNull();
    expect(binaryMiddle).not.toBeNull();
    expect(binaryMax).not.toBeNull();
  });


});
