# Atomico monorepo

## Scripts

If you want to work in development mode, you first need to run `npm run dev`, in order to prepare the package.json of each subpackage.

### npm run dev

Initialize development mode for all web components inside the `/packages` folder, the package exports and types are temporary while running this script.

### npm run start

Initialize the development server (Vite), remember this script must be run after `npm run dev`.

### npm run build

When using monorepo, prefer the use of CI (Example Github actions or Netlify) to distribute or deploy, since in its local use it will rewrite the package.json associating the exports and types when using the `npm run build` script.

### npm run create

Create a new component in the `/packages` directory
