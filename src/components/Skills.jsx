import {Section, SectionHeader} from "./ui/section.jsx";
import {Skill} from "./ui/skill.jsx";

export function Skills() {
    return (
        <Section>
            <SectionHeader>Skills</SectionHeader>
            <div className="text-md">
                <ul className="space-y-2">
                    <Skill name="Languages">PHP | JavaScript | Python | Lua | SQL | Regex</Skill>
                    <Skill name="PHP">v5-8 | Composer | Symfony Components | Twig | Laravel 8-12 | Slim | PHPUnit</Skill>
                    <Skill name="JavaScript">Node.js | jQuery | React | Vue | Three.js</Skill>
                    <Skill name="SQL">MySQL | Postgres | SQLite</Skill>
                    <Skill name="CSS">Bootstrap | TailwindCSS</Skill>
                    <Skill name="Browser Extensions">Chromium | Manifest v3</Skill>
                    <Skill name="API Design">REST | RPC | OpenAPI | JSON | XML/XSD</Skill>
                    <Skill name="AWS">GovCloud | ELB | EC2 | Elastic Beanstalk | Lambda | S3 | EFS | SQS | SNS | SES</Skill>
                    <Skill name="Linux">Amazon Linux | Alpine | Raspberry Pi | macOS</Skill>
                    <Skill name="Source Control">Git | GitLab | GitHub | Subversion</Skill>
                    <Skill name="DevOps">Docker | GitHub Actions</Skill>
                    <Skill name="Project Management">Agile | Scrum | Lean | Kanban | Jira | Remote | Async</Skill>
                </ul>
            </div>
        </Section>
    );
}