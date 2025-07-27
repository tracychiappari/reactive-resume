export function JobExperience({ children }) {
    return <div>{children}</div>;
}

export function JobTitle({ children }) {
    return <h3 className="font-semibold text-indigo-200">{children}</h3>;
}

export function JobMeta({ children }) {
    return <p className="text-sm italic text-zinc-400">{children}</p>;
}

export function JobDescription({ children }) {
    return <ul className="list-inside list-disc">{children}</ul>;
}

export function JobPoint ({ children }) {
    return <li>{children}</li>;
}