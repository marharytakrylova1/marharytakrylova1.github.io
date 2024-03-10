import React, { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import Aura from "../components/aura"
import PurpleRipple from "../components/purple_ripple"
import ToTop from "../components/to_top"
import Layout from "../components/layout"

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
import arrow from "../images/arrow.png"
import NCRC_poster from "../images/NCRC_poster.png"
import FLSSUS_group from "../images/FLSSUS_group.png"
import FLPSUS_cert from "../images/FLPSUS_cert.png"
import FLNSUS_cert from "../images/FLNSUS_cert.png"


export default function Experience() {
    const [rightWidth, setRightWidth] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [pageWidth, setPageWidth] = useState(0);
    const [numCarousel, setNumCarousel] = useState(1);
    const [translateDistance, setTranslateDistance] = useState(0);
    const isBrowser = typeof window !== "undefined"

    function calcCarouselPages() {
        if (!isBrowser) return false;
        // Set numper of carousel pages based on client width
        let w = window.innerWidth;
        if (w < 768) {
            setNumCarousel(1);
        } else if (w < 1024) {
            setNumCarousel(1);
        } else if (w < 1280) {
            setNumCarousel(2);
        } else {
            setNumCarousel(3);
        }

        // Set page width
        setPageWidth(carouselWidth / numCarousel - (numCarousel) * 12);
    }

    function handleCarousel(direction) {
        let slides = Math.ceil(shadowing.length / numCarousel);
        if (direction === "left" && pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        } else if (direction === "right" && pageNumber < slides - 1){
            setPageNumber(pageNumber + 1);
        }
    }

    useEffect(() => {
        if (!isBrowser) return false;
        document.title = "Experience | Marharyta Krylova";
        // Add resize event listener
        window.addEventListener("resize", () => {
            setRightWidth(document?.getElementById("right")?.clientWidth);
            setCarouselWidth(document?.getElementById("carousel")?.clientWidth);
        });
        setRightWidth(document?.getElementById("right")?.clientWidth);
        setCarouselWidth(document?.getElementById("carousel")?.clientWidth);

        // Remove resize event listener
        return () => {
            window.removeEventListener("resize", () => {
            setRightWidth(document?.getElementById("right")?.clientWidth);
            setCarouselWidth(document?.getElementById("carousel")?.clientWidth)
        });
        };
      }, []);

    useEffect(() => {
        calcCarouselPages();
    }, [carouselWidth]);

    useEffect(() => {
        setTranslateDistance(-pageNumber * carouselWidth - (pageNumber * 36));
    }, [pageNumber])

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
    ];

    let shadowing = [
        {
            name: "Max B. Medary, MD",
            dates: "Jun 2021 - Present",
            location: "Orlando, FL",
            tot_time: "Hours: 60",
            times: "10 hrs (Clinic), 50 hrs (OR)",
            subtitle: "Neurosurgeon, Greater Orlando Neurosurgery & Spine, Orlando Health",
            actions: [
                "Shadowed clinic visits: pre- and post-op (20+ patients)",
                "Scrubbed in on a number of surgeries, including craniotomies and laminectomies",
                "Followed patients throughout their recovery journeys and gained MRI/CT reading skills"
            ]
        },
        {
            name: "Gerald A. Grant, MD",
            dates: "Aug 2023 - Present",
            location: "Durham, NC",
            tot_time: "Hours: 11",
            times: "7.5 hrs (Clinic), 3.5 hrs (OR)",
            subtitle: "Chair of the Department of Neurosurgery, Neurosurgeon, Duke Health",
            actions: [
                "Shadowed clinic sessions, evaluating disc herniation, chiari malformation, and brain tumors (15+ patients)",
                "Scrubbed in on a shunt placement surgery case on a pediatric patient",
            ]
        },
        {
            name: "Debra L. Sudan, MD",
            dates: "Aug 2023 - Present",
            location: "Durham, NC",
            tot_time: "Hours: 8.5",
            times: "5 hrs (Clinic) 3.5 hrs (OR)",
            subtitle: "Kidney/Pancreas, Liver, Small Intestine Transplant Surgeon, Duke Health",
            actions: [
                "Shadowed 15+ post-op liver/kidney transplant clinic follow-ups",
                "Scrubbed in on a liver transplant (donor side); aided by Deepak Vikraman, MD",
            ]
        },
        {
            name: "John K. Roberts, MD, MEd, MS",
            dates: "Aug 2023 - Present",
            location: "Durham, NC",
            tot_time: "Hours: 8",
            times: "8 hrs (Rounds)",
            subtitle: "Kidney/Pancreas Transplant Specialist, Nephrologist",
            actions: [
                "Gained exposure to patient evaluation pre- and post-transplant through hospital rounds (25+ patients)",
                "Attended MS1 Lectures: “Patient Care: Approach to the Patient with Hyperkalemia” and “Race and GFR”",
            ]
        },
        {
            name: "Erik F. Hauck, MD",
            dates: "Aug 2023 - Present",
            location: "Durham, NC",
            tot_time: "Hours: 11",
            times: "11 hrs (Cath-Lab)",
            subtitle: "Neurosurgeon, Duke Health",
            actions: [
                "Scrubbed in on a number of cath lab procedures, including patient qualification screening for an intracranial stent, intracranial arterial stenting, and more",
            ]
        },
        {
            name: "David E. Attarian, MD, FACS",
            dates: "Aug 2023 - Present",
            location: "Durham, NC",
            tot_time: "Hours: 4",
            times: "4 hrs (OR)",
            subtitle: "Chief Medical Officer, Orthopaedic Surgeon, Duke Health Integrated Practice",
            actions: [
                "Scrubbed in on a left hip replacement surgery",
            ]
        },
        {
            name: "Robert J. Mentz, MD",
            dates: "Aug 2023 - Present",
            location: "Durham, NC",
            tot_time: "Hours: 10.5",
            times: "10.5 hrs (Rounds)",
            subtitle: "Chief of the Heart Failure Section, Advanced Heart Failure Specialist, Duke Health",
            actions: [
                "Gained knowledge in advanced heart failure (amyloids and more) and cardiology patient care",
                "Shadowing hospital rounds (30+ patients)",
            ]
        },
        {
            name: "Alexander Fishberg, MD",
            dates: "Oct 2022",
            location: "Orlando, FL",
            tot_time: "Hours: 4",
            times: "4 hrs (Clinic)",
            subtitle: "Primary Care Specialist, Primary Care Specialists of FL",
            actions: [
                "Gained insight into primary care practices and patient interactions",
                "Shadowed 10+ patient visits",
            ]
        },
        {
            name: "John M. Choi, MD &. Diana Lambie, MD",
            dates: "Jun 2022 - July 2022",
            location: "Orlando, FL",
            tot_time: "Hours: 10",
            times: "10 hrs (OR)",
            subtitle: "Plastic Surgeons, Advanced Aesthetics",
            actions: [
                "Scrubbed in on blepharoplasty, brachioplasty, and abdominoplasty surgeries",
                "Gained exposure to aesthetic surgical procedures and techniques",
            ]
        }
    ];

    let conferences = [
        {
            name: "National Collegiate Research Conference (NCRC) Harvard University",
            date: "Jan 2024",
            subheading: "In-Person Experience, Presenter",
            location: "Boston, MA",
            actions: [
                "Selected as a presenter for the nation's largest international  undergraduate-run research conference",
                "Presented my research, titled “Targeting DNA Replication Stress in Glioblastoma Cells that Utilize the Alternative Lengthening of Telomeres Mechanism,” to a panel of specialized judges and fellow undergraduate student researchers",
                "Engaged with distinguished keynote speakers and participated in an interactive workshop sessions,  further enriching my research experience"
            ],
            image: NCRC_poster
        },
        {
            name: "The Future Leaders in Surgery Symposium for Underrepresented Students (FLSSUS)",
            date: "Sep 2023",
            subheading: "In-Person Experience",
            location: "Durham, NC",
            actions: [
                "1 of 50 selected students to attend the in-person symposium integrating orthopedic, neuro, and plastic surgery topics",
                "Established valuable connections with medical students for mentorship and guidance, contributing to career exploration and network building",
                "Took part in interactive learning sessions covering suturing, knot tying, and foraminotomy"
            ],
            image: FLSSUS_group
        },
        {
            name: "The Future Leaders in Plastic Surgery Symposium for Underrepresented Students (FLPSUS)",
            date: "Sep 2022",
            subheading: "Virtual Experience",
            location: null,
            actions: [
                "Acquired insights into the neurosurgery field through workshop sessions led by accomplished professionals",
                "Attended a keynote presentation, \"My Neurosurgery Career Journey,\" by Dr. Edjah K. Nduom, MD, from Emory University",
                "Toured the OR and participated in interactive group breakout sessions with medical students, fostering knowledge enhancement and networking opportunities within the neurosurgery community"
            ],
            image: FLPSUS_cert
        },
        {
            name: "The Future Leaders in Neurosurgery Symposium for Underrepresented Students (FLNSUS)",
            date: "Aug 2022",
            subheading: "Virtual Experience",
            location: null,
            actions: [
                "Gained insights into the neurosurgery field through a diverse range of sessions led by accomplished professionals",
                "Attended a keynote presentation on \"My Neurosurgery Career Journey\" by Dr. Edjah K. Nduom, MD, Emory University",
                "Had the privilege of touring the operating room and joining interactive small group breakout sessions, enhancing knowledge and networking within the neurosurgery community"
            ],
            image: FLNSUS_cert
        }
    ]

    return (
        <main>
            <Layout>
                {/* Landing */}
                <div className="relative h-screen w-full">
                    <div className="flex flex-col md:flex-row justify-center items-center h-full w-full">
                        <div className="w-11/12 md:w-1/2 flex flex-col justify-center items-center">
                            <div className="max-w-xl mx-8 md:mx-12">
                                <div className="w-min">
                                    <h1 className="text-5xl font-semibold">Experience</h1>
                                    <div className="w-[40%] h-1 mt-2 bg-duke" />
                                </div>
                                <p className="mt-4 text-xl">My experiences are fueled by continuous learning, diligent research efforts, compassionate community service, 
                                and a commitment to dismantling barriers in medicine through increased representation and inclusivity. </p>
                            </div>
                        </div>
                        <div id="right" className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center overflow-hidden">
                            <img src={margo_experience} alt="" className="absolute w-[60%] bottom-[15%]" />
                            <div className="absolute bottom-0 -right-24 w-[150%] h-1/6 transform rotate-[-20deg]">
                                <PurpleRipple bg="transparent" />
                                <div className="-mt-1 h-screen bg-purple" />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-[30%] -translate-y-1/2">
                                <Aura width={2 * rightWidth / 3} height={rightWidth} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Employment */}
                <h1 id="employment" className="text-5xl font-semibold pt-0 md:pt-24 pb-12 text-center">Employment</h1>
                <div className="max-w-12xl grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 mx-auto px-8 md:px-12">
                    <div className="relative flex md:hidden flex-col justify-center px-0 md:px-20 py-8">
                        <div className="hidden md:block absolute bottom-0 left-0 h-12 w-12 bg-duke" >
                            <div className="h-full w-full rounded-bl-full bg-white" />
                        </div>
                        <p className="text-xl xl:text-2xl text-gray-700">Feb 2024 - Present</p>
                        <h2 className="text-2xl xl:text-3xl font-semibold mt-2 mb-4">Duke University Health System</h2>
                        <p className="text-xl xl:text-2xl font-semibold mb-4">Clinical Technician II - Phlebotomy</p>
                        <ul className="text-sm xl:text-xl list-disc ml-8">
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
                    <div className="relative bg-duke rounded-3xl md:rounded-br-none py-12 flex flex-col justify-center">
                        <img src={duke_health_logo} alt="Duke Health logo" className="w-1/2 ml-[5%]" />
                        <img src={duke_health_tubes} alt="Test tubes containing blood" className="w-1/2 mr-[5%] ml-auto -mt-[10%]" /> 
                    </div>
                    <div className="relative hidden md:flex flex-col justify-center px-0 md:px-20 py-8">
                        <div className="hidden md:block absolute bottom-0 left-0 h-12 w-12 bg-duke" >
                            <div className="h-full w-full rounded-bl-full bg-white" />
                        </div>
                        <p className="text-xl xl:text-2xl text-gray-700">Feb 2024 - Present</p>
                        <h2 className="text-2xl xl:text-3xl font-semibold mt-2 mb-4">Duke University Health System</h2>
                        <p className="text-xl xl:text-2xl font-semibold mb-4">Clinical Technician II - Phlebotomy</p>
                        <ul className="text-sm xl:text-xl list-disc ml-8">
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
                    <div className="relative flex flex-col justify-center px-0 md:px-20 py-8">
                        <div className="hidden md:block absolute top-0 right-0 h-12 w-12 bg-duke" >
                            <div className="h-full w-full rounded-tr-full bg-white" />
                        </div>
                        <div className="hidden md:block absolute bottom-0 right-0 h-12 w-12 bg-duke" >
                            <div className="h-full w-full rounded-br-full bg-white" />
                        </div>
                        <p className="text-xl xl:text-2xl text-gray-700">Jun 2023 - Aug 2023</p>
                        <h2 className="text-2xl xl:text-3xl font-semibold mt-2 mb-4">Florida State University Young Scholar's Program</h2>
                        <p className="text-xl xl:text-2xl font-semibold mb-4">Head Counselor (STEM-Research Program)</p>
                        <ul className="text-sm xl:text-xl list-disc ml-8">
                            <li>Mentored 40 high-school incoming seniors and offered comprehensive 
                                tutoring in Biology and Research coursework</li>
                            <li>Coordinated and managed after-class programming and weekend trips</li>
                            <li>Maintained communication with professors, TAs, and program 
                                directors to ensure student success in the program</li>
                            <li>Addressed students' health concerns, facilitating emergency room 
                                visits and coordinating with the student health center for injuries</li>
                        </ul>
                    </div>
                    <div className="relative bg-duke rounded-3xl md:rounded-tl-none md:rounded-bl-none py-12 flex flex-col justify-center">
                        <img src={ysp_group} alt="YSP summer 2023 cohort" className="w-1/2 ml-[5%]" />
                        <img src={ysp_posters} alt="YSP summer 2023 cohort poster session" className="w-1/2 mr-[5%] ml-auto -mt-[10%]" /> 
                    </div>
                    <div className="relative flex md:hidden flex-col justify-center px-0 md:px-20 py-8">
                        <div className="hidden md:block absolute top-0 left-0 h-12 w-12 bg-duke" >
                            <div className="h-full w-full rounded-tl-full bg-white" />
                        </div>
                        <p className="text-xl xl:text-2xl text-gray-700">May 2022 - Aug 2023</p>
                        <h2 className="text-2xl xl:text-3xl font-semibold mt-2 mb-4">Gary Munson Heating & Air Conditioning Services</h2>
                        <p className="text-xl xl:text-2xl font-semibold mb-4">Dispatch Coordinator & Accounts Receivable</p>
                        <ul className="text-sm xl:text-xl list-disc ml-8">
                            <li>Optimized operational efficiency by developing procedural flow charts for technicians</li>
                            <li>Managed payment collection</li>
                            <li>Efficiently coordinated dispatch for ~15 technicians</li>
                            <li>AServed as a bridge between field technicians and the office team, ensuring seamless 
                                communication and fostering a high level of customer satisfaction</li>
                        </ul>
                    </div>
                    <div className="relative bg-duke rounded-3xl md:rounded-tr-none py-12 flex flex-col justify-center">
                        <img src={munson_logo} alt="Gary Munson Heating and A/C Services logo" className="w-1/2 ml-[5%]" />
                        <img src={munson_computer} alt="Person typing on a computer" className="w-1/2 mr-[5%] ml-auto -mt-[10%]" /> 
                    </div>
                    <div className="relative hidden md:flex flex-col justify-center px-0 md:px-20 py-8">
                        <div className="hidden md:block absolute top-0 left-0 h-12 w-12 bg-duke" >
                            <div className="h-full w-full rounded-tl-full bg-white" />
                        </div>
                        <p className="text-xl xl:text-2xl text-gray-700">May 2022 - Aug 2023</p>
                        <h2 className="text-2xl xl:text-3xl font-semibold mt-2 mb-4">Gary Munson Heating & Air Conditioning Services</h2>
                        <p className="text-xl xl:text-2xl font-semibold mb-4">Dispatch Coordinator & Accounts Receivable</p>
                        <ul className="text-sm xl:text-xl list-disc ml-8">
                            <li>Optimized operational efficiency by developing procedural flow charts for technicians</li>
                            <li>Managed payment collection</li>
                            <li>Efficiently coordinated dispatch for ~15 technicians</li>
                            <li>AServed as a bridge between field technicians and the office team, ensuring seamless 
                                communication and fostering a high level of customer satisfaction</li>
                        </ul>
                    </div>
                </div>

                {/* Programs */}
                <h1 id="programs" className="text-5xl font-semibold pt-24 pb-12 text-center">Programs</h1>
                <div className="max-w-12xl px-8 md:px-12 mx-auto">
                    <div className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-12 p-8 md:p-20 bg-light rounded-3xl shadow overflow-hidden">
                        {/* Background auras */}
                        <div className="absolute top-0 left-0 w-1/2 h-1/2">
                            <Aura width={rightWidth} height={rightWidth / 2} deg={-45} zIndex={1} />
                        </div>
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
                            <Aura width={rightWidth} height={rightWidth} deg={45} zIndex={1} />
                        </div>
                        {programs.map((program, index) => (
                            <div key={index} className="flex flex-col justify-between p-6 md:p-12 z-10 bg-white rounded-xl shadow">
                                <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 space-x-0 md:space-x-12 pb-4 md:pb-0">
                                    <div>
                                        <p className="text-base md:text-xl xl:text-2xl text-gray-700">{program.dates}</p>
                                        <h2 className="text-lg md:text-2xl xl:text-3xl font-semibold mt-2 mb-4">{program.name}</h2>
                                    </div>
                                    <img src={program.image} alt="" className="max-h-16 md:max-h-24 xl:max-h-32 max-w-20 md:max-w-28 xl:max-w-36 object-contain" />
                                </div>
                                <p className="text-base md:text-xl xl:text-2xl font-semibold mb-4">{program.subtitle}</p>
                                <ul className="text-xs md:text-sm xl:text-xl list-disc ml-8">
                                    {program.actions.map((action, index) => (
                                        <li key={index}>{action}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clinical Shadowing */}
                <h1 id="shadowing" className="text-5xl font-semibold pt-24 pb-12 text-center">Clinical Shadowing</h1>
                <div className="flex flex-row items-center max-w-12xl px-2 md:px-12 mx-auto">
                    <button onClick={() => handleCarousel("left")} className="w-8 md:w-16 mx-2 md:mx-8 transform rotate-180 hover:scale-105 transition-all duration-200"><img src={arrow} alt="Previous"/></button>
                    <div id="carousel" className="grid grid-flow-col gap-x-12 w-full overflow-hidden">
                        {shadowing.map((shadow, index) => (
                            <div key={index} style={{ width: pageWidth, transform: `translateX(${translateDistance}px)` }} className="bg-light p-4 rounded-xl flex flex-col justify-between shadow text-duke transition-all duration-300">
                                <div className="flex flex-row justify-between">
                                    <p className="text-sm md:text-base xl:text-lg font-semibold">{shadow.dates}</p>
                                    <p className="text-sm md:text-base xl:text-lg font-semibold">{shadow.tot_time}</p>
                                </div>
                                <p className="text-xl md:text-2xl xl:text-3xl  font-bold text-center my-2 md:my-4">{shadow.name}</p>
                                <p className="text-sm md:text-base xl:text-xl text-black text-center mx-6 md:mx-12">{shadow.subtitle}</p>
                                <p className="text-sm md:text-base xl:text-xl font-semibold my-2 md:my-4">{shadow.times}</p>
                                <ul className="text-xs md:text-sm xl:text-xl list-disc bg-white rounded-xl p-3 md:p-4 shadow">
                                    {shadow.actions.map((action, index) => (
                                        <li className="ml-8 text-black" key={index}>{action}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                    <button onClick={() => handleCarousel("right")} className="w-8 md:w-16 mx-4 md:mx-8 transform hover:scale-105 transition-all duration-200"><img src={arrow} alt="Next" /></button>
                </div>

                {/* Conferences  */}
                <div id="conferences" className="mt-24" />
                <PurpleRipple />
                <div className="bg-purple text-white">
                    <h1 className="text-5xl font-semibold pt-12 pb-12 text-center">Selective Conferences</h1>
                    <div className="max-w-9xl px-8 md:px-12 mx-auto">
                        <div className="flex flex-col space-y-8 md:space-y-16">
                            {conferences.map((conference, index) => (
                                <div key={index} className="p-6 md:p-12 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 space-x-0 md:space-x-32">
                                    {(index % 2 === 1 && isBrowser && window.innerWidth >= 1024) && <img src={conference.image} alt="" className="w-full md:w-[40%] mx-auto object-contain rounded-tr-3xl rounded-bl-3xl shadow" />}
                                    <div className={`flex flex-col justify-center text-black bg-white p-8 shadow ${index % 2 === 0 ? "rounded-lg md:rounded-3xl md:rounded-tl-none md:rounded-br-none" : "rounded-lg md:rounded-3xl md:rounded-tr-none md:rounded-bl-none"}`}>
                                        <p className="text-base md:text-xl xl:text-2xl text-gray-700">{conference.date}</p>
                                        <h2 className="text-lg md:text-2xl xl:text-3xl text-duke font-semibold mt-2 mb-4">{conference.name}</h2>
                                        <p className="text-base md:text-xl xl:text-2xl font-semibold mb-4">{conference.subheading} {conference.location && `— ${conference.location}`}</p>
                                        <ul className="text-xs md:text-sm xl:text-xl list-disc ml-8">
                                            {conference.actions.map((action, index) => (
                                                <li key={index}>{action}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {(index % 2 === 0 || (isBrowser && window.innerWidth < 1024)) && <img src={conference.image} alt="" className="w-full md:w-[40%] mx-auto object-contain rounded-lg md:rounded-3xl md:rounded-tr-none md:rounded-bl-none shadow" />}
                                </div>
                            ))}
                        </div>         
                    </div>
                </div>

                <ToTop bg="purple" invert={true} />
                <div className="h-24 bg-purple" />
            </Layout>
        </main>
    )
}