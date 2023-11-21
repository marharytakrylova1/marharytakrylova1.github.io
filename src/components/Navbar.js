import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    let location = useLocation();

    return (
        <div className="h-20 bg-white flex flex-row justify-between items-center px-24 text-duke shadow-md">
            <div className="text-2xl font-light">Marharyta Krylova</div>
            <div className="flex flex-row gap-1">
                <Link to={'/'} className={`transition ease-in-out duration-300 px-6 py-2 ${location.pathname === '/' ? "underline" : ""}`}>About</Link>
                <Link to={"/experience"} className={`transition ease-in-out duration-300 px-6 py-2 ${location.pathname === '/experience' ? "underline" : ""}`}>Experience</Link>
                <Link to={"/involvement"} className={`transition ease-in-out duration-300 px-6 py-2 ${location.pathname === '/involvement' ? "underline" : ""}`}>Involvement</Link>
                <Link to={"/research"} className={`transition ease-in-out duration-300 px-6 py-2 ${location.pathname === '/research' ? "underline" : ""}`}>Research</Link>
            </div>
        </div>
    );
}