import { myUtil } from 'mylib-utils';
import { describe, test, expect } from 'vitest';

describe('My Utils package test', () => {
  describe('myUtil()', () => {
    test('shoul return a summ of two passed numbers', () => {
      const number1 = 5;
      const number2 = 10;

      const summ = myUtil(number1, number2);

      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      expect(summ).toBe(15);
    });
  });
});
