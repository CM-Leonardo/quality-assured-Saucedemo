import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  videosFolder: 'cypress/video',
  video: true
})