When the developer creates the merge request, please ensure the checklists below are added to the PR description and that all the points are checked before asking the code owner to review them before merging.

## Process checklist

With this pull/merge request, I ensure:

- [ ] PR: The target `branch` to merge is correct.
- [ ] PR: No code `conflicts` when I created the PR.
- [ ] PR: The `title` begins with the task ID.
- [ ] PR: Well-formed `title`: What we do what we say in the PR title.
- [ ] PR: The `changelog` record has been appropriately updated with the exact text as the PR title.
- [ ] PR: The `changelog` record is in the correct location (in alphabetical order).
- [ ] PR: If the implementation changes the UI, the `screenshots` are attached to the PR description or comments.
- [ ] PR: The `[Care]` tag has been considered for the **(1)** _PR title_, **(2)** _task title_, and **(3)** _changelog record_ if the implementation involves significant risk or uncertainty.
- [ ] PR: The `[Config]` tag has been considered for the **(1)** _PR title_, **(2)** _task title_, **(3)** _task description in the config section_, and **(4)** _changelog record_ IF the implementation changes configuration or environment variables.
- [ ] PR: The `[Migration]` tag has been considered for the **(1)** _PR title_, **(2)** _task title_, **(3)** _task description in the migration section_, and **(4)** _changelog record_ IF the implementation changes the database structure.
- [ ] PR: The `[Docs]` tag has been considered for the **(1)** _PR title_, **(2)** _task title_, **(3)** _task description in the documentation section_, **(4)** _PR description_, and **(5)** _the changelog record_ IF the implementation changes the documentation.
- [ ] Task: The developer `implementation details` have been added to the task description.
- [ ] Task: The developer `testing checklist` has been added to the task description.
- [ ] AI: Ask AI to `review` the main code. The developer must then deal smartly with the AI recommendations.
- [ ] AI: Ask AI to `suggest` code `comments` or `refactors` or `naming` conventions. The developer must then deal smartly with the AI recommendations.
- [ ] Help: Please understand the above terms. If you need an explanation, don't hesitate to contact the person handling them (mainly your direct supervisor, but it could be anyone on the team who learned this).

## React & TypeScript checklist

- [ ] Ensure proper TypeScript types are defined for all components, props, and state.
- [ ] Verify that no `any` types are used unless absolutely necessary.
- [ ] Check that React hooks follow the rules of hooks (only called at the top level).
- [ ] Confirm proper dependency arrays in useEffect, useMemo, and useCallback hooks.
- [ ] Ensure components follow the single responsibility principle.
- [ ] Verify that components are properly memoized when needed for performance.

## UI & Styling checklist

- [ ] Ensure all Shadcn UI components are imported correctly from `@/components/ui`.
- [ ] Verify that the `cn` utility from `@/lib/utils.ts` is used for combining class names.
- [ ] Check that Tailwind CSS classes follow the project's style conventions.
- [ ] Ensure the UI is responsive and works on mobile devices.
- [ ] Verify that UI changes maintain accessibility standards.
- [ ] Check that any new UI components match the existing design system.

## Code quality checklist

- [ ] Ensure the best (of your) `English` for the PR title.
- [ ] Ensure the best (of your) `English` for variable, method, and class names.
- [ ] For the private variable of a class, please use `_` as the prefix.
- [ ] Ensure there is no variable with convention violation (the project's convention is `TheNameCanBeAlsoTheComment` aka. as explicit as possible).
- [ ] Ensure no typo in the name of the variables and methods (exception is acceptable, but you need to be very careful; we have a lot of `typo issues`).
- [ ] Ensure no `redundant code or comments` in the codebase (useless code or comments should be removed).
- [ ] Verify that the code follows the project's naming conventions:
  - [ ] kebab-case for all files and folders in the src directory (e.g., `user-profile.tsx`, `auth-context.ts`)
  - [ ] PascalCase for React component names (e.g., `UserProfile`, `AuthContext`)
  - [ ] camelCase for variables, methods, and function names (e.g., `getUserData`, `isLoading`)
- [ ] Ensure all imports are organized and unused imports are removed.
- [ ] Check that the code passes ESLint and Prettier checks without warnings.
- [ ] Verify that the code follows the project's directory structure guidelines.

## State management & API checklist

- [ ] Ensure TanStack Query (React Query) is used correctly for data fetching.
- [ ] Verify that API service functions are organized in feature-specific modules.
- [ ] Check that proper error handling is implemented for API calls.
- [ ] Ensure form validations use Zod schemas where appropriate.
- [ ] Verify that React Hook Form is used correctly for form management.
- [ ] Check that state is managed at the appropriate level (local vs. context).
