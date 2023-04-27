const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/",
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    video:false
  },
  reporter: "spec" ,
  reporterOptions: {
    reportDir: "cypress/results",  
    video:false
  },
});
