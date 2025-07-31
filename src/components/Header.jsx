export function Header() {
    return (
        <header className="text-center mb-10">
            <h1 className="text-4xl text-indigo-400 font-bold">Tracy Chiappari</h1>
            <p className="mt-2 text-lg">Santa Barbara, California | Remote</p>
            <p className="mt-2 text-lg">
                <a href="https://github.com/tracychiappari" target="_blank"
                   className="text-indigo-500 hover:text-indigo-600 hover:underline">GitHub</a> | <a
                href="https://www.linkedin.com/in/tracylinchiappari" target="_blank"
                className="text-indigo-500 hover:text-indigo-600 hover:underline">LinkedIn</a>
            </p>
        </header>
    );
}