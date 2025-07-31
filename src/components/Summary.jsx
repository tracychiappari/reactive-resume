import {Section, SectionContent, SectionHeader} from './ui/Section.jsx';

export function Summary() {
    return (
        <Section>
            <SectionHeader>Professional Summary</SectionHeader>
            <SectionContent>
                <p className="mb-4">
                    Skilled (and opinionated) LAMP stack developer with over 20 years of experience working with PHP,
                    MySQL,
                    HTML, vanilla JavaScript, and CSS, alongside AWS-based hosting. I enjoy planning (or perhaps
                    controlling)
                    all aspects of the development and deployment process. I've led small development teams responsible
                    for
                    designing, releasing, and maintaining web applications, as well as managing full-stack development
                    solo. I
                    thrive in small, collaborative teams with high responsibility and autonomy, and have 16 years of
                    experience
                    working remotely.
                </p>
                <p className="mb-4">
                    As a team lead, I place immense importance on both the mental health and education of my team
                    members. My
                    goal is to foster a supportive, productive environment while managing project expectations so that
                    both team
                    wellbeing and business goals are met sustainably. A productive team is not a burnt-out team.
                </p>
                <p>
                    As a developer and designer, I lean toward open source technologies (particularly Linux and PHP) as
                    my
                    preferred tools for back-end development. That said, I believe in using the right tool for the job
                    rather
                    than adhering rigidly to any one language or framework. I’m thoughtful about which third-party
                    libraries or
                    frameworks to adopt, choosing based on long-term maintainability and suitability rather than trends.
                    While
                    I’ve dabbled in Python and Node, I don’t typically reach for them as my first choice. I am a full
                    stack
                    developer, which includes front end technology and design. It is important to me that things look
                    good, as
                    well as fulfill their function.
                </p>
            </SectionContent>
        </Section>
    );
}