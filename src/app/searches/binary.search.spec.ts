import { TestBed } from '@angular/core/testing';
import { BinarySearch } from "./binary.search";

describe('BinarySearch', () => {

  let binarySearch:BinarySearch;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: []
    }).compileComponents();

    binarySearch = new BinarySearch();

  });

  it('should be true because binarySearch is not null', () => {
    expect(binarySearch).not.toBeNull();
  });

  it('should be true because Header = 0,Middle = 2,Tail = 4', () => {

    let element = [9, 8, 2, 4, 1];

    let result = binarySearch.pointer(0,element,8);

    expect(result).toEqual([0, 2, 4]);

  });

  it('should be true because the target is found at index 2', () => {

    let element = [9, 8, 2, 4, 1];

    let result = binarySearch.pointer(0,element,2);

    expect(result).toEqual([2]);

  });

});
