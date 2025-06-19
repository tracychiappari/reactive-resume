import {Header} from "./header.jsx";
import {Summary} from "./summary.jsx";
import {Skills} from "./skills.jsx";
import {Experience} from "./experience.jsx";
import {Education} from "./education.jsx";

export function Resume() {
    return (
        <>
            <Header/>
            <Summary/>
            <Skills/>
            <Experience/>
            <Education/>
        </>
    );
}