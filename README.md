# MicroVisualizer

MicroVisualizer is a tool for visualizing microservices architecture. Define services, messaging topics, and their relationships to generate an interactive graph of your system.

## Repository

This repo contains the public-facing website for MicroVisualizer, including the API specification and documentation.

- **`api/`** — OpenAPI specification (`microvisualizer-v1.yaml`)
- **`docs/`** — User and integration guides
- **`.github/workflows/`** — GitHub Actions for deploying to GitHub Pages

## Website

The site is built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/), and hosted on [GitHub Pages](https://pages.github.com/).

### Deployment

1. Enable GitHub Pages in repository settings (Settings → Pages → Source: **GitHub Actions**).
2. Pushes to `main` trigger the [`deploy.yml`](.github/workflows/deploy.yml) workflow automatically.

### Local development

```bash
npm install
npm run start
```

## API

The API definition is available at [`api/microvisualizer-v1.yaml`](api/microvisualizer-v1.yaml) and browsable interactively at `/api` on the deployed site.
