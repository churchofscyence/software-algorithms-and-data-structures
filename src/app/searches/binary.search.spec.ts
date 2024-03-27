import { TestBed } from '@angular/core/testing';
import { BinarySearch } from "./binary.search";

describe('BinarySearch', () => {
  /*
   * The stepCount is number of the iteration in the Binary Search.
   */

  let binaryMin0:BinarySearch;
  let binarySmall20:BinarySearch;
  let binaryMiddle30:BinarySearch;
  let binaryLarger50:BinarySearch
  let binaryMax60:BinarySearch;
  let binaryNotInArray70:BinarySearch;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: []
    }).compileComponents();

    binaryMin0 = new BinarySearch([0,10,20,30,40,50,60],0);
    binarySmall20 = new BinarySearch([0,10,20,30,40,50,60],20);
    binaryMiddle30 = new BinarySearch([0,10,20,30,40,50,60],30);
    binaryLarger50 = new BinarySearch([0,10,20,30,40,50,60],50);
    binaryMax60 = new BinarySearch([0,10,20,30,40,50,60],60);
    binaryNotInArray70 = new BinarySearch([0,10,20,30,40,50,60],70);

  });

  it('should be true because binarySearch is not null', () => {
    expect(binaryMin0).not.toBeNull();
    expect(binarySmall20).not.toBeNull();
    expect(binaryMiddle30).not.toBeNull();
    expect(binaryLarger50).not.toBeNull();
    expect(binaryMax60).not.toBeNull();
    expect(binaryNotInArray70).not.toBeNull();
  });

  //Boundary Condition (Minimum Number 0)
  it('should be [0, 3, 6], [0, 1, 2], and  [0] for looking 0', () => {

    console.log("Boundary Condition (Minimum Number 0)");
    let resultStep0 = binaryMin0.pointer(0);

    expect(resultStep0).toEqual([0,3,6]);

    let resultStep1 = binaryMin0.pointer(1);

    expect(resultStep1).toEqual([0, 1, 2]);

    let resultStep2 = binaryMin0.pointer(2);

    expect(resultStep2).toEqual([0]);

  });

  //Boundary Condition (Small Number 20)
  it('should be [0, 3, 6], [0, 1, 2], and  [2] for looking 20', () => {

    console.log("Boundary Condition  (Small Number 20)");
    let resultStep0 = binarySmall20.pointer(0);

    expect(resultStep0).toEqual([0,3,6]);

    let resultStep1 = binarySmall20.pointer(1);

    expect(resultStep1).toEqual([0, 1, 2]);

    let resultStep2 = binarySmall20.pointer(2);

    expect(resultStep2).toEqual([2]);

  });

  //Boundary Condition (Middle Number 30)
  it('should be  [3] for looking 30', () => {

    console.log("Boundary Condition  (Middle Number 30)");
    let resultStep0 = binaryMiddle30.pointer(0);

    expect(resultStep0).toEqual([3]);


  });

  //Boundary Condition (Larger Number 50)
  it('should be [0, 3, 6] and  [5] for looking 50', () => {

    console.log("Boundary Condition  (Larger Number 50)");
    let resultStep0 = binaryLarger50.pointer(0);

    expect(resultStep0).toEqual([0,3,6]);

    let resultStep1 = binaryLarger50.pointer(1);

    expect(resultStep1).toEqual([5]);

  });


  //Boundary Condition (Maximum Number 60)
  it('should be [0, 3, 6], [4,5,6], and  [6] for looking 60', () => {

    console.log("Boundary Condition  (Maximum Number 60)");
    let resultStep0 = binaryMax60.pointer(0);

    expect(resultStep0).toEqual([0,3,6]);

    let resultStep1 = binaryMax60.pointer(1);

    expect(resultStep1).toEqual([4,5,6]);

    let resultStep2 = binaryMax60.pointer(2);

    expect(resultStep2).toEqual([6]);


  });

  //Boundary Condition (Not in Array 70)
  it('should be [0, 3, 6], [4,5,6], and  [] for looking 70', () => {

    console.log("Boundary Condition  (Maximum Number 60)");
    let resultStep0 = binaryNotInArray70.pointer(0);

    expect(resultStep0).toEqual([0,3,6]);

    let resultStep1 = binaryNotInArray70.pointer(1);

    expect(resultStep1).toEqual([4,5,6]);

    let resultStep2 = binaryNotInArray70.pointer(2);

    expect(resultStep2).toEqual([]);


  });

});
