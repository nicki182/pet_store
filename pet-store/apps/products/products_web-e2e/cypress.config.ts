import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'pnpm exec nx run products_web:dev',
        production: 'pnpm exec nx run products_web:serve-static',
      },
      ciWebServerCommand: 'pnpm exec nx run products_web:serve-static',
      ciBaseUrl: 'http://localhost:3000',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
