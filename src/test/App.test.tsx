import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App Integration', () => {
    it('should render the complete landing page', () => {
        render(<App />)

        // Check for main structural elements
        expect(screen.getByRole('main')).toBeInTheDocument()

        // Check for skip link
        const skipLink = screen.getByRole('link', { name: /skip to main content/i })
        expect(skipLink).toBeInTheDocument()

        // Check for main heading
        const mainHeading = screen.getByRole('heading', { level: 1 })
        expect(mainHeading).toBeInTheDocument()
        expect(mainHeading).toHaveTextContent('Matt Hernandez')

        // Check for About section
        const aboutHeading = screen.getByRole('heading', { level: 2, name: /about me/i })
        expect(aboutHeading).toBeInTheDocument()

        // Check for Contact section
        const contactHeading = screen.getByRole('heading', { level: 2, name: /let's connect/i })
        expect(contactHeading).toBeInTheDocument()
    })

    it('should have accessible navigation structure', () => {
        render(<App />)

        // Check for proper heading hierarchy
        const headings = screen.getAllByRole('heading')
        expect(headings).toHaveLength(4) // H1, H2 (About), H3 (Skills), H2 (Contact)

        // Check for LinkedIn links
        const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i })
        expect(linkedinLinks.length).toBeGreaterThan(0)

        linkedinLinks.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank')
            expect(link).toHaveAttribute('rel', 'noopener noreferrer')
        })
    })

    it('should display personal information correctly', () => {
        render(<App />)

        // Check for key personal information
        expect(screen.getByText('Matt Hernandez')).toBeInTheDocument()
        expect(screen.getByText(/Principal Product Manager/i)).toBeInTheDocument()

        // Check for skills
        expect(screen.getByText('JavaScript/TypeScript')).toBeInTheDocument()
        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('Azure')).toBeInTheDocument()
    })
})
