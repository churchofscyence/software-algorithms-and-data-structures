import { TestBed } from '@angular/core/testing';
import { BubbleSort } from "./bubble.sort";

describe('BubbleSort', () => {

    let bubble:BubbleSort;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: []
    }).compileComponents();
  });

  it('should be true because BubbleSort is not null', () => {
    expect(bubble).not.toBeNull();
  });

  it('should be the correct indexes', () => {

    bubble = new BubbleSort([4, 3, 2, 1, 0]);
    bubble.generateIndexes();

    //console.log(bubble.indexes);

    expect(bubble.indexes[0]).toEqual({main:0, offset:1});
    expect(bubble.indexes[1]).toEqual({main:0, offset:2});
    expect(bubble.indexes[2]).toEqual({main:0, offset:3});
    expect(bubble.indexes[3]).toEqual({main:0, offset:4});

    expect(bubble.indexes[4]).toEqual({main:1, offset:2});
    expect(bubble.indexes[5]).toEqual({main:1, offset:3});
    expect(bubble.indexes[6]).toEqual({main:1, offset:4});

    expect(bubble.indexes[7]).toEqual({main:2, offset:3});
    expect(bubble.indexes[8]).toEqual({main:2, offset:4});

    expect(bubble.indexes[9]).toEqual({main:3, offset:4});
  });

  it('should be swap the first and second elements in the array', () => {

    bubble = new BubbleSort([4, 3, 2, 1, 0]);
    bubble.swap(0, 1);

    expect(bubble.element).toEqual([3, 4, 2, 1, 0]);
  });

  it('should be swap from the Ascending Order the first and second elements in the array', () => {
    bubble = new BubbleSort([4, 3, 2, 1, 0]);
    bubble.ascendingOrder(0, 1);

    expect(bubble.element).toEqual([3, 4, 2, 1, 0]);
  });

  it('should be swap from the Ascending Order the second and third elements in the array', () => {
    bubble = new BubbleSort([4, 3, 2, 1, 0]);
    bubble.ascendingOrder(1, 2);

    expect(bubble.element).toEqual([4, 2, 3, 1, 0]);
  });

  it('should be correct array for the Step Number', () => {
    bubble = new BubbleSort([4, 3, 2, 1, 0]);

    //Main Index = 0; Offset Index = 1,2,3,4;
    bubble.modifiedAscendingOrder(0);
    expect(bubble.element).toEqual([3, 4, 2, 1, 0]);

    bubble.modifiedAscendingOrder(1);
    expect(bubble.element).toEqual([2, 4, 3, 1, 0]);

    bubble.modifiedAscendingOrder(2);
    expect(bubble.element).toEqual([1, 4, 3, 2, 0]);

    bubble.modifiedAscendingOrder(3);
    expect(bubble.element).toEqual([0, 4, 3, 2, 1]);

    //Main Index = 1; Offset Index = 2,3,4;
    bubble.modifiedAscendingOrder(4);
    expect(bubble.element).toEqual([0, 3, 4, 2, 1]);

    bubble.modifiedAscendingOrder(5);
    expect(bubble.element).toEqual([0, 2, 4, 3, 1]);

    bubble.modifiedAscendingOrder(6);
    expect(bubble.element).toEqual([0, 1, 4, 3, 2]);

    //Main Index = 2; Offset Index = 3,4;
    bubble.modifiedAscendingOrder(7);
    expect(bubble.element).toEqual([0, 1, 3, 4, 2]);

    bubble.modifiedAscendingOrder(8);
    expect(bubble.element).toEqual([0, 1, 2, 4, 3]);

    //Main Index = 3; Offset Index = 4;
    bubble.modifiedAscendingOrder(9);
    expect(bubble.element).toEqual([0, 1, 2, 3, 4]);

  });


});
