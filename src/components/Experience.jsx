import {Section, SectionHeader} from "./ui/Section.jsx";
import {JobExperience, JobTitle, JobMeta, JobDescription, JobPoint} from "./ui/Job.jsx";

export function Experience() {
    return (
        <Section>
            <SectionHeader>Experience</SectionHeader>
            <div className="space-y-6">
                <JobExperience>
                    <JobTitle>cityCore, LLC — Senior Developer / Contractor</JobTitle>
                    <JobMeta>Remote • Sep 2023 – Present</JobMeta>
                    <JobDescription>
                        <JobPoint>Refactored a 3,000-line procedural API responsible for ingesting RFID reader data for an inventory management platform, restructuring duplicated SQL and business logic into modular, secure, maintainable code.</JobPoint>
                        <JobPoint>Clarified and organized status transitions for warehouse items (e.g., received, transferred, sold), improving traceability of transaction and payment logic.</JobPoint>
                        <JobPoint>Assisted with middleware debugging in a Lua-based preprocessor layer used for data normalization.</JobPoint>
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Social Intelligence — Lead Developer</JobTitle>
                    <JobMeta>Remote • Mar 2017 – Oct 2023</JobMeta>
                    <JobDescription>
                        <JobPoint>Led a remote engineering team responsible for two LAMP-based web applications delivering social media background checks.</JobPoint>
                        <JobPoint>Introduced a four-week sprint release cycle and structured product planning to improve delivery cadence and transparency. Provided mentorship, conducted performance reviews, and supported team growth.</JobPoint>
                        <JobPoint>Managed AWS infrastructure and cost optimization.</JobPoint>
                        <JobPoint>Upgraded legacy code to PHP 8, refactoring class structures and introducing modern libraries.</JobPoint>
                        <JobPoint>Designed and launched a JSON-based REST API for external clients and partner systems.</JobPoint>
                        <JobPoint>Implemented Stripe integration and redesigned the client UI to streamline onboarding and analysis workflows.</JobPoint>
                        <JobPoint>Developed Chrome extensions for data capture, and full-page screenshots.</JobPoint>
                        <JobPoint>Oversaw technical separation from a sister company, including AWS data migration and server handoff, and helped lead the team through a successful acquisition and transition.</JobPoint>
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Omniplex World Services — Senior Programmer Analyst</JobTitle>
                    <JobMeta>Remote • Jan 2016 – Feb 2017</JobMeta>
                    <JobDescription>
                        <JobPoint>Sole developer maintaining a LAMP-based platform for security clearance reporting.</JobPoint>
                        <JobPoint>Managed AWS GovCloud infrastructure and server migrations to Amazon Linux.</JobPoint>
                        <JobPoint>Built business intelligence reports with myDBR and transitioned document generation from LiveDocx to PhpDocx.</JobPoint>
                        <JobPoint>Handled staging and production deployments, user support, and codebase maintenance.</JobPoint>
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Riv Data Corp — Senior Developer</JobTitle>
                    <JobMeta>Remote • Feb 2011 – Jan 2016</JobMeta>
                    <JobDescription>
                        <JobPoint>Designed and implemented features for a social media-based reporting platform.</JobPoint>
                        <JobPoint>Built a Chrome extension with screen capture and in-browser image processing via Canvas.</JobPoint>
                        <JobPoint>Integrated search APIs (Google, Bing, Yahoo) for data sourcing and enrichment.</JobPoint>
                        <JobPoint>Migrated version control from Subversion to Git, improving team workflow and reliability.</JobPoint>
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>LexisNexis — Software Engineer</JobTitle>
                    <JobMeta>Remote • Aug 2008 – Jan 2011</JobMeta>
                    <JobDescription>
                        <JobPoint>Developed and maintained PHP-based insurance quoting and policy administration software.</JobPoint>
                        <JobPoint>Implemented client-specific features, scoped estimates, and guided client onboarding.</JobPoint>
                        <JobPoint>Supported QA teams in troubleshooting and resolving implementation issues.</JobPoint>
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Insurity — Programmer Analyst</JobTitle>
                    <JobMeta>Santa Barbara, CA • Aug 2006 – Aug 2008</JobMeta>
                    <JobDescription>
                        <JobPoint>Delivered custom rating, underwriting, and form features for insurance clients.</JobPoint>
                        <JobPoint>Led client implementations and supported pre-sales technical efforts.</JobPoint>
                        <JobPoint>Created a hierarchical permission system for granular access control.</JobPoint>
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Steel Card — Developer</JobTitle>
                    <JobMeta>Santa Barbara, CA • Nov 2005 – Aug 2006</JobMeta>
                    <JobDescription>
                        <JobPoint>Developed rating algorithms and dynamic PDF forms for personal lines insurance software.</JobPoint>
                        <JobPoint>Migrated internal tools to a newer PHP platform and designed a comprehensive policy data view.</JobPoint>
                    </JobDescription>
                </JobExperience>
            </div>
        </Section>
    );
}