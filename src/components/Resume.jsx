import {Header} from "./Header.jsx";
import {Summary} from "./Summary.jsx";
import {Skills} from "./Skills.jsx";
import {Experience} from "./Experience.jsx";
import {Education} from "./Education.jsx";

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