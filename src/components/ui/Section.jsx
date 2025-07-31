
export function Section({bottom = false, children}) {
    return (
        <section className={bottom ? "" : "mb-10"}>{children}</section>
    );
}

export function SectionHeader({children}) {
    return (
        <h2 className="text-2xl text-indigo-400 font-semibold border-b border-zinc-700 pb-1 mb-4">{children}</h2>
    );
}