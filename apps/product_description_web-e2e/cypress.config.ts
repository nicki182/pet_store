import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'pnpm exec nx run product_description_web:serve',
        production: 'pnpm exec nx run product_description_web:serve-static',
      },
      ciWebServerCommand:
        'pnpm exec nx run product_description_web:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
