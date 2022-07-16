import stringLength from "./stringLength";
import reverseString from "./reverseString";
import Calculator from "./calculator";
import capitalize from "./capitalizeString";

const myCalculator = new Calculator()

describe("Get String Length", () => {
  test("Get length to be > 0", () => {
    expect(stringLength("h")).not.toBeLessThan(1);
  });
  test('Get length > 10 toBe "input string is more than 10"', () => {
    expect(stringLength("stringdjdkr")).toEqual("input string is more than 10");
  });
});

describe("Reverse String", () => {
  test('Reverse string "reverse" to be "esreveR"', () => {
    expect(reverseString('Reverse')).toBe('esreveR');
  });
});

describe("Simple Calculator", () => {
  describe('Add', () => {
    test('Add 2 + 1 to equals 3', () => {
      expect(myCalculator.add(2, 1)).toBe(3);
    });
    test('Add "2" + 1 to be undefined', () => {
      expect(myCalculator.add('2', 1)).not.toBe(3);
    });
    test('Add "2" + "1" to be undefined', () => {
      expect(myCalculator.add('2', '1')).not.toBe(3);
    });
    test('Add "two" + "one" = undefined', () => {
      expect(myCalculator.add("two", "one")).toBe(undefined);
    });
  })

  describe('Subtract', () => {
    test('subtract 3 from 5 to equals 2', () => {
      expect(myCalculator.subtract(5, 3)).toBe(2);
    });
    test('subtract "3" from 5 to equals undefined', () => {
      expect(myCalculator.subtract('3', 5)).not.toBe(2);
    });
    test('subtract "3" from "5" to equals undefined', () => {
      expect(myCalculator.subtract('3', '5')).toBe(undefined);
    });
    test('subtract 3 from 5 to equals = undefined', () => {
      expect(myCalculator.subtract("three", "five")).toBe(undefined);
    });
  })

  describe('Multiply', () => {
    test('multiply 3 by 5 to equals 15', () => {
      expect(myCalculator.multiply(5, 3)).toBe(15);
    });
    test('multiply "3" by 5 to equals undefined', () => {
      expect(myCalculator.multiply('3', 5)).toBe(undefined);
    });
    test('multiply "3" from "5" to equals undefined', () => {
      expect(myCalculator.multiply('3', '5')).toBe(undefined);
    });
    test('multiply 3 from 5 to equals = undefined', () => {
      expect(myCalculator.multiply("three", "five")).toBe(undefined);
    });
  })

  describe('Divide', () => {
    test('15 divided by 5 to equals "Infinity"', () => {
      expect(myCalculator.divide(15, 0)).toBe(Infinity);
    });
    test('15 divided by 5 to equals 3', () => {
      expect(myCalculator.divide(15, 5)).toBe(3);
    });
    test('"15" divided by 5 to equals undefined', () => {
      expect(myCalculator.divide('15', 5)).toBe(undefined);
    });
    test('"15" divided by "5" to equals undefined', () => {
      expect(myCalculator.divide('15', '5')).toBe(undefined);
    });
  })
});

describe('Capitalize', () => {
  test('capitalize joy to equal "Joy"', () => {
    expect(capitalize('joy')).toBe('Joy');
  });
})