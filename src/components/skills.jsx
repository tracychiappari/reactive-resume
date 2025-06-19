import {Section, SectionHeader} from "./ui/section.jsx";
import {Skill} from "./ui/skill.jsx";

export function Skills() {
    return (
        <Section>
            <SectionHeader>Skills</SectionHeader>
            <div className="text-md">
                <ul className="space-y-2">
                    <Skill name="PHP">v5–8 | Composer | Symfony Components | Twig | Laravel 8–12 | PHPUnit</Skill>
                    <Skill name="Python" />
                    <Skill name="SQL">MySQL | Postgres | SQLite | MyDBR</Skill>
                    <Skill name="JavaScript">jQuery | React | Three.js</Skill>
                    <Skill name="CSS">Bootstrap | TailwindCSS</Skill>
                    <Skill name="XML">HTML/XHTML | XSD</Skill>
                    <Skill name="JSON" />
                    <Skill name="Regex">PCRE | ECMA</Skill>
                    <Skill name="Browser Extensions">Chromium | Manifest v2–v3</Skill>
                    <Skill name="AWS">Amazon Linux | Elastic Beanstalk | GovCloud</Skill>
                    <Skill name="Source Control">Git | GitLab | GitHub | Subversion</Skill>
                    <Skill name="DevOps">Docker</Skill>
                    <Skill name="Project Management">Agile | Scrum | Async</Skill>
                </ul>
            </div>
        </Section>
    );
}