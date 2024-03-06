import React, { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import Aura from "../components/aura"
import PurpleRipple from "../components/purple_ripple"

// import images
import margo_experience from "../images/margo_experience.png"
import duke_health_logo from "../images/duke_health_logo.png"
import duke_health_tubes from "../images/duke_health_tubes.png"
import ysp_group from "../images/ysp_group.png"
import ysp_posters from "../images/ysp_posters.png"
import munson_logo from "../images/munson_logo.png"
import munson_computer from "../images/munson_computer.png"
import bcg_logo from "../images/bcg_logo.png"
import mayo_clinic_logo from "../images/mayo_clinic_logo.png"
import penny_pilgram_logo from "../images/penny_pilgram_logo.png"
import duke_focus_logo from "../images/duke_focus_logo.png"

export default function Experience() {
    const [rightWidth, setRightWidth] = useState(0);

    useEffect(() => {
        document.title = "Experience | Marharyta Krylova";
        // Add resize event listener
        window.addEventListener("resize", () => setRightWidth(document.getElementById("right").clientWidth));
        setRightWidth(document.getElementById("right").clientWidth);

        // Remove resize event listener
        return () => window.removeEventListener("resize", () => setRightWidth(document.getElementById("margo").clientWidth));
      }, []);

      let programs = [
        {
            name: "Boston Consulting Group Launch",
            dates: "Jan 2024 - Feb 2024",
            subtitle: "Online Program",
            actions: [
                "Gained firsthand insights into the essential skills and knowledge required for a successful journey towards becoming a consulting associate",
                "Shaped comprehensive understanding of the firm's culture and the intricacies of client engagement"
            ],
            image: bcg_logo
        },
        {
            name: "Mayo Clinic Undergraduate Plummer Scholars (UPS)",
            dates: "Oct 2023 - Feb 2024",
            subtitle: "Online Program",
            actions: [
                "Attended webinars focusing on critical pre-medical topics, such as MCAT preparation, medical student experiences, and guidance for medical school applications and interviews",
                "Demonstrated a steadfast commitment to personal and professional growth in the pre-medical field"
            ],
            image: mayo_clinic_logo
        },
        {
            name: "Penny Pilgram George Women's Leadership Initiative",
            dates: "Sep 2023 - May 2024",
            subtitle: "Girls on the Run Triangle Cohort",
            actions: [
                "Implemented a research-based curriculum focused on self-awareness, relationship building, teamwork, and global impact",
                "Actively involved in organizing the December 2023 5K event with an attendance of 3,500 people"
            ],
            image: penny_pilgram_logo
        },
        {
            name: "Duke University FOCUS",
            dates: "Aug 2022 - May 2023",
            subtitle: "Medicine, Ethics, & Health Policy",
            actions: [
                "Acquired expertise in narrative medicine, DWD/PAS, and partook in service learning",
                "Evaluated and developed personal leadership style within the context of healthcare",
                "Gained insights into healthcare structures and systems and crafted a comprehensive hospital management project encompassing administrative, medical, and financial aspects of healthcare management"
            ],
            image: duke_focus_logo
        }
      ]

    return (
        <main>
            <Navbar />
            <div className="relative h-screen w-full">
                <div className="flex flex-row justify-center items-center h-full w-full">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="max-w-xl">
                            <div className="w-min">
                                <h1 className="text-5xl font-semibold">Experience</h1>
                                <div className="w-[40%] h-1 mt-2 bg-duke" />
                            </div>
                            <p className="mt-4 text-xl">My experiences are fueled by continuous learning, diligent research efforts, compassionate community service, 
                            and a commitment to dismantling barriers in medicine through increased representation and inclusivity. </p>
                        </div>
                    </div>
                    <div id="right" className="relative w-1/2 h-full flex flex-col justify-center items-center overflow-hidden">
                        <img src={margo_experience} className="absolute w-[60%] bottom-[15%]" />
                        <div className="absolute bottom-0 -right-24 w-[150%] h-1/6 transform rotate-[-20deg]">
                            <PurpleRipple bg="transparent" />
                            <div className="h-screen bg-purple" />
                        </div>
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-[30%] -translate-y-1/2">
                            <Aura width={2 * rightWidth / 3} height={rightWidth} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Employment */}
            <h1 className="text-5xl font-semibold pt-24 pb-12 text-center">Employment</h1>
            <div className="max-w-12xl grid grid-cols-2 grid-rows-3 mx-auto px-12">
                <div className="relative bg-duke rounded-3xl rounded-br-none py-12 flex flex-col justify-center">
                    <img src={duke_health_logo} className="w-1/2 ml-[5%]" />
                    <img src={duke_health_tubes} className="w-1/2 mr-[5%] ml-auto -mt-[10%]" /> 
                </div>
                <div className="relative flex flex-col justify-center px-20">
                    <div className="absolute bottom-0 left-0 h-12 w-12 bg-duke" >
                        <div className="h-full w-full rounded-bl-full bg-white" />
                    </div>
                    <p className="text-2xl text-gray-700">Feb 2024 - Present</p>
                    <h2 className="text-3xl font-semibold mt-2 mb-4">Duke University Health System</h2>
                    <p className="text-2xl font-semibold mb-4">Clinical Technician II - Phlebotomy</p>
                    <ul className="text-xl list-disc ml-8">
                        <li>Executed precise blood specimen collection, ensuring patient comfort and 
                            satisfaction in an in-patient environment </li>
                        <li>Utilized rigorous infection control measures, mitigating 
                            contamination risks effectively</li>
                        <li>Vigilantly verified and labeled specimens, increasing 
                            the reliability of laboratory results</li>
                        <li>Collaborated with healthcare professionals, while educating and 
                            reassuring patients for a cohesive and informed environment</li>
                        <li>Methodically documented patient information and collection details, 
                            ensuring meticulous compliance with regulatory standards</li>
                    </ul>
                </div>
                <div className="relative flex flex-col justify-center px-20">
                    <div className="absolute top-0 right-0 h-12 w-12 bg-duke" >
                        <div className="h-full w-full rounded-tr-full bg-white" />
                    </div>
                    <div className="absolute bottom-0 right-0 h-12 w-12 bg-duke" >
                        <div className="h-full w-full rounded-br-full bg-white" />
                    </div>
                    <p className="text-2xl text-gray-700">Jun 2023 - Aug 2023</p>
                    <h2 className="text-3xl font-semibold mt-2 mb-4">Florida State University Young Scholar's Program</h2>
                    <p className="text-2xl font-semibold mb-4">Head Counselor (STEM-Research Program)</p>
                    <ul className="text-xl list-disc ml-8">
                        <li>Mentored 40 high-school incoming seniors and offered comprehensive 
                            tutoring in Biology and Research coursework</li>
                        <li>Coordinated and managed after-class programming and weekend trips</li>
                        <li>Maintained communication with professors, TAs, and program 
                            directors to ensure student success in the program</li>
                        <li>Addressed students' health concerns, facilitating emergency room 
                            visits and coordinating with the student health center for injuries</li>
                    </ul>
                </div>
                <div className="relative bg-duke rounded-3xl rounded-tl-none rounded-bl-none py-12 flex flex-col justify-center">
                    <img src={ysp_group} className="w-1/2 ml-[5%]" />
                    <img src={ysp_posters} className="w-1/2 mr-[5%] ml-auto -mt-[10%]" /> 
                </div>
                <div className="relative bg-duke rounded-3xl rounded-tr-none py-12 flex flex-col justify-center">
                    <img src={munson_logo} className="w-1/2 ml-[5%]" />
                    <img src={munson_computer} className="w-1/2 mr-[5%] ml-auto -mt-[10%]" /> 
                </div>
                <div className="relative flex flex-col justify-center px-20">
                    <div className="absolute top-0 left-0 h-12 w-12 bg-duke" >
                        <div className="h-full w-full rounded-tl-full bg-white" />
                    </div>
                    <p className="text-2xl text-gray-700">May 2022 - Aug 2023</p>
                    <h2 className="text-3xl font-semibold mt-2 mb-4">Gary Munson Heating & Air Conditioning Services</h2>
                    <p className="text-2xl font-semibold mb-4">Dispatch Coordinator & Accounts Receivable</p>
                    <ul className="text-xl list-disc ml-8">
                        <li>Optimized operational efficiency by developing procedural flow charts for technicians</li>
                        <li>Managed payment collection</li>
                        <li>Efficiently coordinated dispatch for ~15 technicians</li>
                        <li>AServed as a bridge between field technicians and the office team, ensuring seamless 
                            communication and fostering a high level of customer satisfaction</li>
                    </ul>
                </div>
            </div>

            {/* Programs */}
            <h1 className="text-5xl font-semibold pt-24 pb-12 text-center">Programs</h1>
            <div className="max-w-12xl grid grid-cols-2 grid-rows-2 gap-12 mx-12 p-20 bg-light rounded-3xl shadow">
                {programs.map((program, index) => (
                    <div key={index} className="flex flex-col justify-center p-12 bg-white rounded-xl shadow">
                        <div className="flex flex-row justify-between space-x-12">
                            <div>
                                <p className="text-2xl text-gray-700">{program.dates}</p>
                                <h2 className="text-3xl font-semibold mt-2 mb-4">{program.name}</h2>
                            </div>
                            <img src={program.image} className="max-h-32 max-w-36 object-contain" />
                        </div>
                        <p className="text-2xl font-semibold mb-4">{program.subtitle}</p>
                        <ul className="text-xl list-disc ml-8">
                            {program.actions.map((action, index) => (
                                <li key={index}>{action}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    )
}