import { defineConfig } from '@playwright/test';
export default defineConfig({
    reporter: [['list', {  outputFolder: 'test-report' }]],
});