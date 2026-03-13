# UI Components

Reusable UI components live here. This folder follows the common **shadcn-style** convention (`/components/ui`):

- **Why this path?** A single, predictable location for shared UI pieces makes imports consistent and makes it easier to add more components (e.g. from shadcn CLI) later.
- **Usage:** Import from `./components/ui/<component-name>` in your pages (e.g. `TestimonialsSection` from `testimonial-v2.tsx`).

Components in this folder may use **Tailwind CSS** (scoped via their own CSS file) so the rest of the app stays on the existing global styles.
