# Davis Haden Portfolio

This project is a personal portfolio built with React and Vite. The site is deployed to **GitHub Pages** using the `gh-pages` package.

## Local setup

1. Install [Node.js](https://nodejs.org/) (which includes `npm`).
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. To work on the site locally, run `npm run dev` and open the provided local address in your browser.

## Building and deploying

The `deploy` script builds the project and publishes the contents of the `dist` directory to the `gh-pages` branch.

```bash
npm run deploy
```

This command runs the following steps:

1. `npm run build` – generates the static files in `dist`.
2. `gh-pages -d dist` – pushes `dist` to the `gh-pages` branch.

After the command completes, GitHub Pages should serve the updated site from the `gh-pages` branch. Make sure your repository settings are configured to use this branch.

## Updating the site

1. Pull the latest changes from `main`.
2. Make your edits in the `src` directory or other project files.
3. Commit and push your changes to `main`.
4. Run `npm run deploy` to build and publish to GitHub Pages.

The changes should appear at <https://davis-haden.github.io/davis-haden-portfolio/> once the GitHub Pages build finishes.
