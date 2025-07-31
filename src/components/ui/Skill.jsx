export function Skill({name, children}) {
    return (
        <li className="flex">
            <h3 className="font-semibold text-indigo-200">{name}</h3>
            {children && <p className="pl-1">| {children}</p>}
        </li>
    );
}