import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, {openAPISidebarGroups} from 'starlight-openapi';

export default defineConfig({
  site: 'https://docs.microvisualizer.com',
  integrations: [
    starlight({
      title: 'MicroVisualizer',
      logo: {src: './src/assets/logo.svg'},
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/microvisualizer/microvisualizer',
        },
      ],
      plugins: [
        starlightOpenAPI([
          {
            base: 'api',
            schema: './api/microvisualizer-v1.yaml',
            sidebar: {
              operations: {
                labels: 'operationId',
                badges: true,
              },
            },
          },
        ]),
      ],
      sidebar: [
        {label: 'Introduction', slug: 'intro'},
        ...openAPISidebarGroups,
      ],
    }),
  ],
});
