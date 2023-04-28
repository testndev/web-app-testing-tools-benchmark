import { describe, expect, test } from '@jest/globals';

describe(`S_1: Suite of tests with Jest`, () => {
  test(`Simple addition [T_01]`, () => {
    expect(2 + 2).toBe(4);
  });

  test(`Simple multiplication [T_02]`, () => {
    expect(2 * 2).toBe(4);
  });
})

