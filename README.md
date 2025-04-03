<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Admin & Dashboard Template</h3>

  <p align="center">
    React Admin Dashboard Starter Template With Shadcn-ui, built with the Vite + React Ts
    <br />
    <a href="https://github.com/hoanghm690/ecommerce-admin"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/hoanghm690/ecommerce-admin">View Demo</a>
    &middot;
    <a href="https://github.com/hoanghm690/ecommerce-admin/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/hoanghm690/ecommerce-admin/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Js Library - [React 19](https://react.dev/)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- Async state management - [Tanstack Query aka React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- Tables - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table)
- Type-safe search params state manager for React - [nuqs](https://nuqs.47ng.com/)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)
- Pre-commit hook - [Husky](https://typicode.github.io/husky/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/hoanghm690/ecommerce-admin.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Find the `.env.example` file in your project directory.
5. Create a new `.env.local` file in the same directory as `.env.example` if it doesn't already exist
6. Add the necessary environment variable to `.env.local`: Open `.env.local` and add the following line, updating 'ENTER YOUR API' with the actual API URL that you are working with:
   ```js
   VITE_API_URL = 'ENTER YOUR API'
   ```
7. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
8. Save the file and restart your development server if it's running to make sure the new environment variables are loaded.
   ```sh
   npm run dev
   ```
9. You should now be able to access the application at `http://localhost:5173`

<p align="right">(<a href="#readme-top">back to top</a>)</p>
