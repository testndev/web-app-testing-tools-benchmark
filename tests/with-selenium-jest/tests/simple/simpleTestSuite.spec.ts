import {describe, expect, test} from '@jest/globals';

describe(`S_1: Suite of tests with Jest`, () => {
  test(`T_1_1: Simplest example`, () => {
    expect(2 + 2).toBe(4);
  });
})

