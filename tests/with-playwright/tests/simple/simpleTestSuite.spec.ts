import { test, expect } from '@playwright/test';

test.describe(`S_1: Suite of tests with Playwright Test framework`, () => {
  test(`Simple addition [T_01]`, () => {
    expect(2 + 2).toBe(4);
  });
  
  test(`Simple multiplication [T_02]`, () => {
    expect(2 * 2).toBe(4);
  });
})

