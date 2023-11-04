import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    let location = useLocation();

    return (
        <div className="h-20 bg-duke flex flex-row justify-between items-center px-24 text-white">
            <div className="text-2xl font-light">Marharyta Krylova</div>
            <div className="flex flex-row gap-1">
                <Link to={'/'} className={`transition ease-in-out duration-300 px-6 py-2 bg-white ${location.pathname === '/' ? "text-duke" : "text-white hover:text-duke bg-opacity-0 hover:bg-opacity-60"}`}>About</Link>
                <Link to={"/experience"} className={`transition ease-in-out duration-300 px-6 py-2 bg-white ${location.pathname === '/experience' ? "text-duke" : "text-white hover:text-duke bg-opacity-0 hover:bg-opacity-60"}`}>Experience</Link>
                <Link to={"/involvement"} className={`transition ease-in-out duration-300 px-6 py-2 bg-white ${location.pathname === '/involvement' ? "text-duke" : "text-white hover:text-duke bg-opacity-0 hover:bg-opacity-60"}`}>Involvement</Link>
                <Link to={"/research"} className={`transition ease-in-out duration-300 px-6 py-2 bg-white ${location.pathname === '/research' ? "text-duke" : "text-white hover:text-duke bg-opacity-0 hover:bg-opacity-60"}`}>Research</Link>
            </div>
        </div>
    );
}