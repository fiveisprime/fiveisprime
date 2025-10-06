import { type FC } from 'react'
import styles from './About.module.css'

interface AboutProps {
    name: string
    bio: string
    skills: string[]
    profileImageUrl?: string
}

export const About: FC<AboutProps> = ({ name, bio, skills, profileImageUrl }) => {
    return (
        <section className={styles.about} aria-labelledby="about-title">
            <div className={styles.container}>
                <div className={styles['about-content']}>
                    <div className={styles['about-image']}>
                        {profileImageUrl ? (
                            <img
                                src={profileImageUrl}
                                alt={`Profile photo of ${name}`}
                                className={styles['profile-image']}
                                loading="lazy"
                            />
                        ) : (
                            <div
                                className={styles['profile-image']}
                                style={{
                                    backgroundColor: 'var(--color-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'var(--font-size-4xl)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}
                                aria-label={`Profile placeholder for ${name}`}
                            >
                                {name.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div className={styles['about-text']}>
                        <h2 id="about-title" className={styles['about-title']}>
                            About Me
                        </h2>
                        <p className={styles['about-description']}>{bio}</p>
                        <div>
                            <h3
                                style={{
                                    fontSize: 'var(--font-size-xl)',
                                    marginBottom: 'var(--spacing-md)',
                                    color: 'var(--color-text)'
                                }}
                            >
                                Skills & Technologies
                            </h3>
                            <ul className={styles['skills-list']} aria-label="Technical skills">
                                {skills.map((skill, index) => (
                                    <li key={index} className={styles['skill-item']}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
