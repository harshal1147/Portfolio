# Harshal Sonar Portfolio

A responsive portfolio built with React, TypeScript, Vite, and Lucide icons.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main` or `master`.

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. Push to `main` or `master`; the deployment URL appears in the workflow run and the `github-pages` environment.

Vite automatically uses the repository path for project sites and `/` for a `username.github.io` repository.

## Before publishing

Add Harshal's real email address, LinkedIn profile, and GitHub username in the contact section of `src/App.tsx`. The current labels are intentionally placeholders because those details were not supplied.