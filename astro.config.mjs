// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://atheh.github.io' : 'https://victoryfit.fr',
  base: isGitHubPages ? '/victory-fit' : '/',
  integrations: [sitemap()],
});
