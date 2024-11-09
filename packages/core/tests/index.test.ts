import main from '../src/index';
import { describe, test, expect } from 'vitest';

describe('My Package test', () => {
  describe('main()', () => {
    test('shoul return a contatinated string', () => {
      const result = main();

      expect(result).toBe('It works! 3');
    });
  });
});
