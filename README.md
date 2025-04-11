<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Admin & Dashboard Template</h2>

  <p align="center">
    React Admin Dashboard Starter Template With Shadcn-ui, built with the Vite + React Ts
    <br />
    <br />
    <a href="https://github.com/hoanghm690/ecommerce-admin"><strong>Explore the docs »</strong></a>
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
    <li><a href="#directory-structure">Directory Structure</a></li>
    <li><a href="#project-conventions">Project Conventions</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

- Js Library - [React 19](https://react.dev/)
- Language - [TypeScript](https://www.typescriptlang.org)
- Build Tool - [Vite](https://vitejs.dev/)
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

<!-- DIRECTORY STRUCTURE -->

<h2 id="directory-structure">Directory Structure</h2>

```
/src
├── assets          # Static assets like images
├── components      # Reusable UI components (especially Shadcn UI)
│   └── ui          # Shadcn UI components
├── constants       # Constant values and enums
├── features        # Feature-specific components and logic
├── hooks           # Custom React hooks
├── layouts         # Layout components
├── lib             # Shared utilities and configuration (e.g., utils.ts for cn)
├── pages           # Page components (routes)
├── providers       # Context providers
└── utils           # General utility functions
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT CONVENTIONS -->

<h2 id="project-conventions">Project Conventions</h2>

This project follows specific conventions, referred to as **Cursor rules** or **Trae rules**, to ensure code consistency, maintainability, and collaboration efficiency. Development often utilizes AI features, primarily through the **[Cursor](https://cursor.sh/)** editor or the **[Trae IDE](https://www.trae.ai/)** (required for Trae's AI capabilities). You can refer to the configuration files such as `.cursorrules`, `.cursor/rules`, or `.traerules` for more details about the rules applied.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you continue, ensure you meet the following requirements:

- You have installed the latest version of **Node.js** and **npm**.
- You have an understanding of **React** and **TypeScript**.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/hoanghm690/ecommerce-admin.git
    cd ecommerce-admin
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
    _If you encounter package conflict errors (e.g., related to peer dependencies), you might need to run `npm install --force` or `npm install --legacy-peer-deps`._
3.  **Set up environment variables:**
    - Copy the example environment file:
      ```sh
      cp .env.example .env.local
      ```
    - Open `.env.local` and update `VITE_API_URL` with your actual API endpoint. _(Note: The original step mentioned getting an API key from example.com - update this instruction if a specific API key source is needed)._
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
5.  **Access the application:** Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

**(Optional)** If you intend to push changes to your own fork, change the remote URL:

```sh
git remote set-url origin <your-repository-url>
git remote -v # Verify the change
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Here you can show some basic usage examples of your project.

### Example 1: Navigating the Admin Panel

- After running the app, navigate to `http://localhost:5173` to access the admin panel.
- You will see a dashboard that gives you an overview of user activity, project stats, and other key metrics.

### Example 2: Adding New Data

- In the admin panel, go to the "Data Management" section.
- Click on "Add New Data", fill out the form, and submit. Your new data will be reflected in the database and updated in the dashboard.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- Thank you!
