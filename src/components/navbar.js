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
                    <li className="relative group">
                        <Link className={`py-4 ${location === "/" ? "text-duke font-bold" : ""}`} to="/">About</Link>
                        <div className="hidden group-hover:flex flex-col space-y-2 py-1 absolute left-0 top-8 bg-white shadow-lg rounded-lg">
                            <Link className="border-b-[1px] border-black pl-4 pr-8 pb-1" to="/#education">Education</Link>
                            <Link className="border-b-[1px] border-black pl-4 pr-8 pb-1" to="/#certifications">Certifications</Link>
                            <Link className="pl-4 pr-8 pb-1" to="/#languages">Languages</Link>
                        </div>
                    </li>
                    <li className="relative group">
                        <Link className={`py-4 ${location === "/experience/" ? "text-duke font-bold" : ""}`} to="/experience">Experience</Link>
                        <div className="hidden group-hover:flex flex-col space-y-2 py-1 absolute left-0 top-8 bg-white shadow-lg rounded-lg whitespace-nowrap">
                            <Link className="border-b-[1px] border-black pl-4 pr-8 pb-1" to="/experience#employment">Employment</Link>
                            <Link className="border-b-[1px] border-black pl-4 pr-8 pb-1" to="/experience#programs">Programs</Link>
                            <Link className="border-b-[1px] border-black pl-4 pr-8 pb-1" to="/experience#shadowing">Clinical Shadowing</Link>
                            <Link className="pl-4 pr-8 pb-1" to="/experience#conferences">Selective Conferences</Link>
                        </div>
                    </li>
                    <li className="relative group">
                        <Link className={`py-4 ${location === "/research/" ? "text-duke font-bold" : ""}`} to="/research">Research</Link>
                        <div className="hidden group-hover:flex flex-col space-y-2 py-1 absolute left-0 top-8 bg-white shadow-lg rounded-lg whitespace-nowrap">
                            <Link className="border-b-[1px] border-black pl-4 pr-8 pb-1" to="/research#current">Current Research</Link>
                            <Link className="pl-4 pr-8 pb-1" to="/research#past">Past Research</Link>
                        </div>
                    </li>
                    <li className="relative group">
                        <Link className={`py-4 ${location === "/involvement/" ? "text-duke font-bold" : ""}`} to="/involvement">Involvement</Link>
                        <div className="hidden group-hover:flex flex-col space-y-2 py-1 absolute left-0 top-8 bg-white shadow-lg rounded-lg">
                            <Link className="border-b-[1px] border-black pl-4 pr-8 pb-1" to="/involvement#coming">Coming</Link>
                            <Link className="pl-4 pr-8 pb-1" to="/involvement#soon">Soon</Link>
                        </div>
                    </li>
                    <li>
                        <a className=" px-6 py-3 bg-duke text-white rounded-full shadow-md" href="/resume" rel="noreferrer" target="_blank">View Resume</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}