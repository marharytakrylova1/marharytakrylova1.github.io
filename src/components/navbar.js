import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"

// Import images
import hamburger from "../images/hamburger.png"

export default function Navbar() {
    const [scrollTop, setScrollTop] = useState(0);
    const [location, setLocation] = useState("");
    const isBrowser = typeof window !== "undefined"

    useEffect(() => {
        if (!isBrowser) return false;
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
                {/* Computer navbar */}
                <div className="hidden md:flex items-center justify-between h-full px-16">
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
                            <a className="px-6 py-3 bg-duke text-white rounded-full shadow-md" href="/resume" rel="noreferrer" target="_blank">View Resume</a>
                        </li>
                    </ul>
                </div>

                {/* Mobile nav menu */}
                <div className="md:hidden flex items-center justify-between h-full px-8">
                    <Link to='/'><h1 className="text-2xl font-serif">MARHARYTA KRYLOVA</h1></Link>
                    <div className="group">
                        <img src={hamburger} alt="" className="w-8" />
                        <div className="absolute top-0 bottom-0 h-screen w-2/3 -right-full group-hover:right-0 flex flex-col space-y-2 py-12 bg-white shadow-lg rounded-lg transition-all duration-500">
                            <Link className="text-lg font-semibold pl-4 pr-8" to="/">About</Link>
                            <ul className="flex flex-col space-y-2 ml-8 pb-2">
                                <li><Link to="/#education">Education</Link></li>
                                <li><Link to="/#certifications">Certifications</Link></li>
                                <li><Link to="/#languages">Languages</Link></li>
                            </ul>
                            <Link className="text-lg font-semibold pl-4 pr-8" to="/experience">Experience</Link>
                            <ul className="flex flex-col space-y-2 ml-8 pb-2">
                                <li><Link to="/experience#employment">Employment</Link></li>
                                <li><Link to="/experience#programs">Programs</Link></li>
                                <li><Link to="/experience#shadowing">Clinical Shadowing</Link></li>
                                <li><Link to="/experience#conferences">Selective Conferences</Link></li>
                            </ul>
                            <Link className="text-lg font-semibold pl-4 pr-8" to="/research">Research</Link>
                            <ul className="flex flex-col space-y-2 ml-8 pb-2">
                                <li><Link to="/research#current">Current Research</Link></li>
                                <li><Link to="/research#past">Past Research</Link></li>
                            </ul>
                            <Link className="text-lg font-semibold pl-4 pr-8" to="/involvement">Involvement</Link>
                            <ul className="flex flex-col space-y-2 ml-8 pb-2">
                                <li><Link to="/involvement#coming">Coming</Link></li>
                                <li><Link to="/involvement#soon">Soon</Link></li>
                            </ul>
                            <a className="text-lg font-semibold text-duke pl-4 pr-8" href="/resume" rel="noreferrer" target="_blank">View Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}