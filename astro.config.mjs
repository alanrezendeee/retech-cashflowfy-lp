import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://cashflowfy.com.br',

  env: {
    schema: {
      // Número WhatsApp obrigatório — formato: 5511999999999 (DDI+DDD+número, sem espaços)
      WHATSAPP_NUMBER: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
      }),
    },
  },
});
