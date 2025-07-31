import {Section, SectionHeader} from "./ui/section.jsx";
import {School} from "./ui/school.jsx";

export function Education() {
    return (
        <Section bottom={true}>
            <SectionHeader>Education</SectionHeader>
            <ul className="space-y-2">
                <School name="Biola University" degree="B.S. Computer Science" />
                <School name="Northeastern University" degree="Graduate Certificate in Project Management" />
                <School name="Stevens Institute of Technology" degree="M.S. Software Engineering">
                    <span className="italic text-sm text-zinc-400">(In Progress)</span>
                </School>
            </ul>
        </Section>
    );
}

