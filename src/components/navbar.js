import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"

export default function Navbar() {
    const [scrollTop, setScrollTop] = useState(0);
    const [location, setLocation] = useState("");

    useEffect(() => {
        // Scroll listener
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        // Location setter
        setLocation(window.location.pathname);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav>
            <div className={`fixed z-50 top-0 left-0 right-0 mb-25 h-20 transition ease-in-out duration-200 ${scrollTop === 0 ? "bg-transparent" : "bg-white shadow"}`}>
                <div className="flex items-center justify-between h-full px-16">
                    <Link to='/'><h1 className="text-2xl font-serif">MARHARYTA KRYLOVA</h1></Link>
                <ul className="flex flex-row items-center space-x-8 text-lg">
                <li><Link className={`${location === "/" ? "text-duke font-bold" : ""}`} to="/">About</Link></li>
                    <li><Link className={`${location === "/experience/" ? "text-duke font-bold" : ""}`} to="/experience">Experience</Link></li>
                    <li><Link className={`${location === "/research/" ? "text-duke font-bold" : ""}`} to="/research">Research</Link></li>
                    <li><Link className={`${location === "/involvement/" ? "text-duke font-bold" : ""}`} to="/involvement">Involvement</Link></li>
                    <li><Link className="px-6 py-3 bg-duke text-white rounded-full shadow-md" to="marharyta_resume.pdf" rel="noreferrer" target="_blank">View Resume</Link></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}