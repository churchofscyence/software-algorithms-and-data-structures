import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('AlgorithmService', () => {
  let service: UtilService;

  let value;
  let expected;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert a string of comma-separated numbers into an array of numbers when given a valid input', () => {
    // Arrange
    value = "1,2,3,4,5";
    expected = [1, 2, 3, 4, 5];

    // Act
    const result = service.convertToNumberArray(value);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should return an empty array when given a non-string input', () => {
    // Arrange
    value = 123;

    // Act
    const result = service.convertToNumberArray(value);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return an empty array when given a value missing a trailing digit', () => {
    // Arrange
    value = '12,';

    // Act
    const result = service.convertToNumberArray(value);

    // Assert
    expect(result).toEqual([]);
  });

});
