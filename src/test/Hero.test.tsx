import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from '../components/Hero'

describe('Hero Component', () => {
    const mockProps = {
        name: 'Test User',
        title: 'Test Title',
        description: 'Test description',
        linkedinUrl: 'https://linkedin.com/in/testuser'
    }

    it('should render with correct accessibility attributes', () => {
        render(<Hero {...mockProps} />)

        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(mockProps.name)

        const section = screen.getByRole('region', { name: /test user/i })
        expect(section).toBeInTheDocument()
    })

    it('should have accessible LinkedIn link', () => {
        render(<Hero {...mockProps} />)

        const linkedinLink = screen.getByRole('link', { name: /connect with test user on linkedin/i })
        expect(linkedinLink).toBeInTheDocument()
        expect(linkedinLink).toHaveAttribute('href', mockProps.linkedinUrl)
        expect(linkedinLink).toHaveAttribute('target', '_blank')
        expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should display all provided content', () => {
        render(<Hero {...mockProps} />)

        expect(screen.getByText(mockProps.name)).toBeInTheDocument()
        expect(screen.getByText(mockProps.title)).toBeInTheDocument()
        expect(screen.getByText(mockProps.description)).toBeInTheDocument()
    })
})
