import expect from 'expect';
import { describe, it } from 'mocha';

describe('An example test', () => {
  it('should pass with flying colors', () => {
    const expected = true;
    const actual = true;
    expect(actual).toEqual(expected);
  });
});
