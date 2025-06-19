export function School({name, degree, children}) {
    return (
        <li>
            <strong>{name}</strong> – {degree} {children}
        </li>
    );
}