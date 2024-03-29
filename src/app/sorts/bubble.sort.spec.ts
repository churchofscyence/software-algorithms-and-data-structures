import { TestBed } from '@angular/core/testing';
import { BubbleSort } from "./bubble.sort";

describe('BubbleSort', () => {

    let bubble:BubbleSort;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: []
    }).compileComponents();

    bubble = new BubbleSort()

  });

  it('should be true because BubbleSort is not null', () => {
    expect(bubble).not.toBeNull();
  });


});
