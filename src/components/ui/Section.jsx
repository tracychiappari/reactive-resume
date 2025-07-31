import {useContext, useState} from 'react';
import {SectionContext} from "../../context/SectionContext.jsx";

export function Section({bottom = false, children}) {
    const [isExpanded, setIsExpanded] = useState(true);

    const context = {
        isExpanded,
        setIsExpanded
    };

    return (
        <SectionContext.Provider value={context}>
            <section className={bottom ? "" : "mb-10"}>
                {children}
            </section>
        </SectionContext.Provider>
    );
}

export function SectionHeader({children}) {
    const { isExpanded, setIsExpanded } = useContext(SectionContext);

    return (
        <h2 onClick={()=>setIsExpanded(!isExpanded)} className="text-2xl text-indigo-400 font-semibold border-b border-zinc-700 pb-1 mb-4">{children}</h2>
    );
}
export function SectionContent({children}) {
    const { isExpanded } = useContext(SectionContext);

    if (!isExpanded) {
        return null;
    }

    return <>{children}</>;
}