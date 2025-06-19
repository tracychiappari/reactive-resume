import {Section, SectionHeader} from "./ui/section.jsx";
import {JobExperience, JobTitle, JobMeta, JobDescription} from "./ui/job.jsx";

export function Experience() {
    return (
        <Section>
            <SectionHeader>Experience</SectionHeader>
            <div className="space-y-6">
                <JobExperience>
                    <JobTitle>cityCore, LLC — Senior Developer / Contractor</JobTitle>
                    <JobMeta>Santa Barbara, CA • Sep 2023 – Present</JobMeta>
                    <JobDescription>
                        Assisted in the development, implementation, and testing of proprietary software. Refactored
                        the internal API to align with modern PHP coding standards and improve maintainability.
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Social Intelligence — Director of Engineering</JobTitle>
                    <JobMeta>Santa Barbara, CA • Mar 2021 – Oct 2023</JobMeta>
                    <JobDescription>
                        Led a small engineering team managing a LAMP-based hiring platform delivering social media
                        reports.
                        Oversaw development, deployment, and maintenance of two web applications, managed AWS costs,
                        and implemented a structured four-week sprint release schedule. Designed product improvements to
                        enhance
                        analyst productivity and client understanding. Developed Chrome extensions for identifying
                        keywords and capturing relevant data. Integrated third-party background screening platforms via
                        XML APIs.
                        Upgraded codebases to PHP 8.0 and MySQL 5.7. Assisted with client transitions following the
                        company’s
                        acquisition by FAMA Technologies.
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Social Intelligence — Senior Developer</JobTitle>
                    <JobMeta>Mar 2017 – Mar 2021</JobMeta>
                    <JobDescription>
                        Primary developer for a LAMP-based hiring platform, overseeing social media reporting, training
                        analysts, and user support. Collaborated with leadership to prioritize, research, and implement
                        solutions. Led a technical split from a sister company, managing AWS servers and data migration.
                        Integrated Stripe for billing, upgraded codebases to PHP 7.1 with Composer support, and
                        refactored class
                        structures with modern libraries. Developed a new client-facing UI, enhanced product workflows,
                        and
                        built a JSON-based REST API for partner integrations.
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Omniplex World Services — Senior Programmer Analyst</JobTitle>
                    <JobMeta>Chantilly, VA • Jan 2016 – Feb 2017</JobMeta>
                    <JobDescription>
                        Sole developer managing a LAMP-based platform for social media-based security clearance reports.
                        Oversaw AWS GovCloud infrastructure, user support, and codebase maintenance. Managed releases
                        through
                        development, staging, and production. Built SQL reports for business analytics with myDBR,
                        migrated
                        Windows servers to Amazon Linux with routine maintenance, and transitioned document generation
                        from
                        LiveDocx to PhpDocx.
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Riv Data Corp — Senior Developer</JobTitle>
                    <JobMeta>Santa Barbara, CA • Feb 2011 – Jan 2016</JobMeta>
                    <JobDescription>
                        Collaborated with the lead developer on a platform delivering social media-based reports for
                        hiring, security clearance, and insurance claims. Designed and implemented features, developed a
                        Chrome extension with screen capture and image processing, migrated the codebase from SVN to
                        Git,
                        and integrated search API responses from providers like Google, Bing, and Yahoo into the system.
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>LexisNexis — Software Engineer</JobTitle>
                    <JobMeta>Santa Barbara, CA • Aug 2008 – Jan 2011</JobMeta>
                    <JobDescription>
                        Developer for PHP-based personal lines insurance point-of-sale and policy administration
                        software.
                        Collaborated with business analysts and project managers to design and implement client-specific
                        enhancements. Created feature estimates, guided client implementation developers, and provided
                        support
                        for troubleshooting and resolving testing issues.
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Insurity — Programmer Analyst</JobTitle>
                    <JobMeta>Santa Barbara, CA • Aug 2006 – Aug 2008</JobMeta>
                    <JobDescription>
                        Developer for PHP-based personal lines insurance point-of-sale and policy administration
                        software.
                        Collaborated with clients, project managers, and analysts to define and deliver customized
                        rating,
                        underwriting, and form solutions. Led client implementations and sales proof-of-concepts,
                        developed new
                        features as needed, and created a hierarchical permissions system for granular access control
                        over
                        policies and system data.
                    </JobDescription>
                </JobExperience>

                <JobExperience>
                    <JobTitle>Steel Card — Developer</JobTitle>
                    <JobMeta>Santa Barbara, CA • Nov 2005 – Aug 2006</JobMeta>
                    <JobDescription>
                        Developer for PHP-based personal lines insurance point-of-sale and policy administration
                        software.
                        Implemented custom insurance rating algorithms and developed PDF forms for automated completion.
                        Provided production support for rating, underwriting, and form functionality. Migrated internal
                        tools to
                        a newer PHP-based system and designed a comprehensive view for policy data, integrating multiple
                        tables
                        with filtering and search capabilities.
                    </JobDescription>
                </JobExperience>
            </div>
        </Section>
    );
}