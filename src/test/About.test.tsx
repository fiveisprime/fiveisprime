import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from '../components/About'

describe('About Component', () => {
    const mockProps = {
        name: 'Test User',
        bio: 'Test bio content',
        skills: ['React', 'TypeScript', 'Node.js']
    }

    it('should render with correct heading structure', () => {
        render(<About {...mockProps} />)

        const heading = screen.getByRole('heading', { level: 2, name: /about me/i })
        expect(heading).toBeInTheDocument()
    })

    it('should display bio content', () => {
        render(<About {...mockProps} />)

        expect(screen.getByText(mockProps.bio)).toBeInTheDocument()
    })

    it('should render skills list with accessibility', () => {
        render(<About {...mockProps} />)

        const skillsList = screen.getByRole('list', { name: /technical skills/i })
        expect(skillsList).toBeInTheDocument()

        mockProps.skills.forEach(skill => {
            expect(screen.getByText(skill)).toBeInTheDocument()
        })
    })

    it('should show profile placeholder when no image provided', () => {
        render(<About {...mockProps} />)

        const placeholder = screen.getByLabelText(/profile placeholder for test user/i)
        expect(placeholder).toBeInTheDocument()
        expect(placeholder).toHaveTextContent('T') // First letter of name
    })

    it('should show profile image when URL provided', () => {
        const propsWithImage = {
            ...mockProps,
            profileImageUrl: 'https://example.com/profile.jpg'
        }

        render(<About {...propsWithImage} />)

        const profileImage = screen.getByRole('img', { name: /profile photo of test user/i })
        expect(profileImage).toBeInTheDocument()
        expect(profileImage).toHaveAttribute('src', propsWithImage.profileImageUrl)
        expect(profileImage).toHaveAttribute('loading', 'lazy')
    })
})
