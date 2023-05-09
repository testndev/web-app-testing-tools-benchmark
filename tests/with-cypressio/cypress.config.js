const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/",
    specPattern: '**/*.spec.{js,jsx,ts,tsx}',
    supportFile: false,
    video:false,
    chromeWebSecurity: false
  },
  reporter: "spec" ,
  reporterOptions: {
    reportDir: "cypress/results",  
    video:false
  },
});
