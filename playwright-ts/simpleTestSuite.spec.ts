import { test, expect } from '@playwright/test';

test.describe(`S_1: Suite of tests with Playwright Test framework`, () => {
  test(`T_1_1: Simplest example`, () => {
    expect(2 + 2).toBe(4);
  });
})

