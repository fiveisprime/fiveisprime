<!--
Sync Impact Report:
- Version change: [template] → 1.0.0
- Added sections: All principles and governance established
- Templates requiring updates: All templates reviewed ✅
- Follow-up TODOs: RATIFICATION_DATE marked as TODO
-->

# FiveIsPrime Personal Landing Page Constitution

## Core Principles

### I. Component-First Architecture
Every feature MUST be built as reusable React components with TypeScript interfaces.
Components MUST be self-contained, independently testable, and properly documented.
No business logic in JSX - use custom hooks and services for complex state management.

### II. Accessibility & Performance (NON-NEGOTIABLE)
All components MUST meet WCAG 2.1 AA standards with proper ARIA attributes and semantic HTML.
Performance MUST achieve Lighthouse scores: 90+ Performance, 100 Accessibility, 100 Best Practices, 90+ SEO.
Images MUST be optimized, lazy-loaded, and include proper alt text.

### III. Test-First Development
TDD mandatory: Component tests written → Functionality approved → Tests fail → Then implement.
Unit tests for all custom hooks, integration tests for user interactions.
Visual regression testing for UI components using automated screenshot comparison.

### IV. Responsive Design Standards
Mobile-first responsive design MUST work flawlessly on all device sizes (320px to 4K).
Touch targets MUST be minimum 44px, readable fonts minimum 16px on mobile.
Progressive enhancement - core functionality MUST work without JavaScript.

### V. Azure Static Web Apps Integration
Deployment MUST use Azure Static Web Apps with automated CI/CD from GitHub.
Environment variables for API endpoints MUST be configured in Azure portal.
Custom domains and SSL certificates MUST be properly configured through Azure.

## Technology Stack Requirements

**Core Stack**: React 18+ with TypeScript, Vite for build tooling, Azure Static Web Apps for hosting.
**Styling**: CSS Modules or Styled Components, no inline styles except for dynamic values.
**Testing**: Vitest for unit tests, React Testing Library for component tests, Playwright for E2E.
**Code Quality**: ESLint, Prettier, Husky pre-commit hooks, strict TypeScript configuration.
**Performance**: Bundle analysis, code splitting, lazy loading for non-critical components.

## Development Workflow

**Branch Strategy**: Feature branches from main, PR reviews required before merge.
**Code Reviews**: All PRs MUST pass automated tests, accessibility checks, and peer review.
**Quality Gates**: Pre-commit hooks for linting/formatting, CI pipeline for tests and builds.
**Deployment**: Automatic deployment to staging on PR creation, production on merge to main.
**Monitoring**: Application Insights integration for performance monitoring and error tracking.

## Governance

Constitution supersedes all other development practices and coding standards.
Amendments require documentation of rationale, impact assessment, and migration plan.
All development decisions MUST verify compliance with these principles.
Performance and accessibility violations MUST be justified or rejected.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown | **Last Amended**: 2025-10-06
