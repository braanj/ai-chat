# Ai Chat APP

## Migration to Nuxt 4

To upgrade your app to `Nuxt@v4`, follow these steps:

1. Restructure the App Folder:

Move `app.vue` into a new `app/` folder as per Nuxt 4 conventions.

```bash
mkdir app
mv app.vue app/
```

2. Run the Official Migration Recipe:

Use Nuxt's official codemod to update your project to Nuxt 4:

```bash
pnpm dlx codemod@latest nuxt/4/migration-recipe
```

This will automatically apply recommended changes to your `nuxt.config`, update files, and point out deprecated patterns.

## Node Version Setup

Make sure everyone working on the project uses the same `Node.js` version.

```bash
node -v > .nvmrc
```

This will create an `.nvmrc` file containing the current `Node.js` version. Developers using nvm can now run:

```bash
nvm use
```

## Set Up pnpm

Make sure your project uses the correct pnpm configuration.

Create a `.npmrc` file in your root directory:

```ini
shamefully-hoist=true
```

This helps avoid issues with dependency resolution in monorepos or when using certain plugins.

## Recommended VS Code Extensions

Create `.vscode/extensions.json` to suggest useful extensions to collaborators:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode", // Prettier for code formatting
    "Vue.volar", // Vue Language Support
    "Prisma.prisma", // Prisma support
    "bradlc.vscode-tailwindcss", // Tailwind CSS IntelliSense
    "dbaeumer.vscode-eslint" // ESLint integration
  ],
  "unwantedRecommendations": [
    "octref.vetur" // Avoid using Vetur in Volar-based projects
  ]
}
```

## VS Code Formatting Settings

Create .vscode/settings.json to standardize code formatting across the team:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
