import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        baseURL: 'https://the-internet.herokuapp.com'
    },
    reporter: [['list', { outputFolder: 'test-report' }]],
});