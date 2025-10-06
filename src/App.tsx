import { type FC } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Contact } from './components/Contact'

const App: FC = () => {
  // Personal information for fiveisprime LinkedIn user
  const personalInfo = {
    name: 'Matt Hernandez',
    title: 'Principal Product Manager & Technology Leader',
    description: 'Passionate about building scalable applications, leading engineering teams, and driving innovation through technology. Experienced in full-stack development, cloud architecture, and DevOps practices.',
    bio: 'I\'m a seasoned software engineer with over a decade of experience building and scaling web applications. I specialize in modern JavaScript technologies, cloud platforms, and leading high-performing engineering teams. My passion lies in solving complex technical challenges while mentoring the next generation of developers.',
    skills: [
      'JavaScript/TypeScript',
      'React',
      'Node.js',
      'Azure',
      'Python',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Team Leadership',
      'System Architecture',
      'DevOps',
      'Microservices'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/fiveisprime',
    githubUrl: 'https://github.com/fiveisprime',
    meetingUrl: 'https://aka.ms/MeetWithMatt',
    profileImageUrl: '/maherna-headshot.jpg'
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <Hero
          name={personalInfo.name}
          title={personalInfo.title}
          description={personalInfo.description}
          linkedinUrl={personalInfo.linkedinUrl}
        />
        <About
          name={personalInfo.name}
          bio={personalInfo.bio}
          skills={personalInfo.skills}
          profileImageUrl={personalInfo.profileImageUrl}
        />
        <Contact
          name={personalInfo.name}
          linkedinUrl={personalInfo.linkedinUrl}
          githubUrl={personalInfo.githubUrl}
          meetingUrl={personalInfo.meetingUrl}
        />
      </main>
    </>
  )
}

export default App
