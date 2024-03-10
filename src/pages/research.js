import React, { useState, useEffect } from "react"  
import Layout from "../components/layout"
import Aura from "../components/aura"
import BlueRipple from "../components/blue_ripple"
import PurpleRipple from "../components/purple_ripple"
import ToTop from "../components/to_top"

// Import images
import margo_research from "../images/margo_research.png"
import brain from "../images/brain.png"
import lightbulb from "../images/lightbulb.png"
import microscope from "../images/microscope.png"
import flask from "../images/flask.png"
import tisch_equipment from "../images/tisch_equipment.png"
import tisch_brain from "../images/tisch_brain.png"
import hauck_img1 from "../images/hauck_img1.png"
import hauck_img2 from "../images/hauck_img2.png"
import book from "../images/book.png"
import glasses from "../images/glasses.png"
import brain_top from "../images/brain_top.png"

export default function Research() {
    const [rightWidth, setRightWidth] = useState(0)

    useEffect(() => {
        document.title = "Research | Marharyta Krylova";
        // Add resize event listener
        window.addEventListener("resize", () => {
            setRightWidth(document.getElementById("right").clientWidth);
        });
        setRightWidth(document.getElementById("right").clientWidth);

        // Remove resize event listener
        return () => window.removeEventListener("resize", () => setRightWidth(document.getElementById("margo").clientWidth));
    }, []);

    let current_research = [
        {
            name: "The Preston Robert Tisch Brain Tumor Center",
            dates: "Oct 2022 - Present",
            subtitle: "Undergraduate Student Researcher, Waitkus Lab, Duke Neurosurgery",
            actions: [
                "Conducted a comprehensive research study on \"Targeting DNA Replication Stress in Glioblastoma Cells that Utilize the Alternative Lengthening of Telomeres Mechanism\"",
                "Responsibilities: Western Blot experiments, antibody troubleshooting, blot imaging, data analysis using iBright and Cellprofiler softwares"
            ],
            images: [tisch_equipment, tisch_brain]
        },
        {
            name: "Duke University Health System",
            dates: "Dec 2023 - Present",
            subtitle: "Undergraduate Student Researcher, Hauck Lab, Duke Neurosurgery",
            actions: [
                "Conducted a comprehensive literature review and case study on spontaneous and traumatic intraorbital arteriovenous fistula (AVF), a rare entity with ~ 30 cases reported worldwide from 1974 to 2024"
            ],
            images: [hauck_img1, hauck_img2]
        }
    ]

    let past_research = [
        {
            name: "Duke University Trinity College",
            dates: "Aug 2023 - Dec 2023",
            subtitle: "Department of Slavic and Eurasian Studies",
            actions: [
                "\"The Process of the Main Character's Memory Restoration as an Example of a Phenomenological Approach to the Perception of Life and the Surrounding World in the Novel 'Aviator' by Evgeny Vodolazkin\"",
                "Examined the intricacies of the main character's memory restoration as a unique lens through which to understand the perception of life and the surrounding world."
            ]
        },
        {
            name: "Duke University Trinity College",
            dates: "Aug 2023 - Dec 2023",
            subtitle: "Statistics Department",
            actions: [
                "\"How does the gender of survey respondents affect the perception of gender discrimination in STEM?\"",
                "Conducted a statistical investigation (using R Studio) on gender perceptions of discrimination in the STEM workplace"
            ]
        },
        {
            name: "Duke University Trinity College",
            dates: "Jan 2022 - May 2022",
            subtitle: "Academic Writing Course",
            actions: [
                "\"Rita Levi-Montalcini and the 7 Success Factors\"",
                "Investigated the influential factors contributing to the success of renowned neurologist Rita Levi-Montalcini, with a focus on personal and professional determinants.",
            ]
        },
        {
            name: "OCPS Biomedical Science Challenge",
            dates: "Mar 2022 - May 2022",
            subtitle: "PLTW Biomedical Program",
            actions: [
                "\"How have mutations observed in the Spike protein of the SARS-CoV 2 impacted the efficacy of currently administered vaccines?\"",
                "Placed 3rd out of 14 participating teams"
            ]
        },
        {
            name: "Florida State University",
            dates: "Jul 2021 - Aug 2021",
            subtitle: "Young Scholars Program",
            actions: [
                "\"Molecular Dynamics Simulation Discovery of Cryptic Sites in SARS-CoV-2 M-pro\"",
                "Presented at the 39th Annual Young Scholars Research Symposium"
            ]
        }
    ]

    return (
        <main>
            <Layout>
                {/* Landing */}
                <div className="h-[85vh] w-full flex flex-row justify-center items-center">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="max-w-xl">
                            <div className="w-min">
                                <h1 className="text-5xl font-semibold">Research</h1>
                                <div className="w-[40%] h-1 mt-2 bg-duke" />
                            </div>
                            <p className="mt-4 text-xl">Motivated by a passion to make a meaningful impact, I actively 
                            explore transnational, clinical, humanities, and statistical research topics. Employing an 
                            interdisciplinary approach, I aim to uncover novel insights and contribute to a more comprehensive 
                            understanding of my areas of study.</p>
                        </div>
                    </div>
                    <div id="right" className="relative w-1/2 h-full flex flex-col justify-center items-center">
                        <img src={margo_research} alt="" className="absolute w-[45%] bottom-0" />
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-[30%] -translate-y-1/2">
                            <Aura width={rightWidth / 2} height={rightWidth} />
                        </div>
                    </div>
                </div>
                <div className="h-[15vh] bg-duke" />

                {/* Current Research */}
                <div id="current" />
                <BlueRipple rotation={180} />
                <h1 className="text-5xl font-semibold pt-24 pb-12 text-center">Current Research</h1>
                <div className="w-10/12 max-w-12xl mx-auto flex flex-col space-y-16 mb-16">
                    {current_research.map((research, index) => (
                        <div key={index} className="flex flex-row justify-between items-center">
                            <div className="w-[50%] flex flex-col space-y-4">
                                <p className="text-xl">{research.dates}</p>
                                <h2 className="text-3xl font-semibold">{research.name}</h2>
                                <p className="text-xl">{research.subtitle}</p>
                                <ul className="text-xl list-disc ml-8">
                                    {research.actions.map((action, index) => (
                                        <li key={index}>{action}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-[40%] flex flex-row justify-between">
                                {research.images.map((image, index) => (
                                    <img key={index} src={image} alt="" className="w-[47%]" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Past Research */}
                <PurpleRipple rotation={0} />
                <div id="past" />
                <PurpleRipple rotation={180} bg="#F9F9F9" />
                <div className="bg-light pb-16">
                    <h1 className="text-5xl font-semibold pt-24 pb-12 text-center">Past Research</h1>
                    <div className="w-10/12 max-w-12xl mx-auto grid grid-cols-2 gap-12 bg-light">
                        {past_research.map((research, index) => (
                            <div key={index} className="flex flex-col justify-between space-y-4 bg-white p-8 rounded-lg shadow">
                                <p className="text-xl">{research.dates}</p>
                                <h2 className="text-3xl font-semibold">{research.name}</h2>
                                <p className="text-xl">{research.subtitle}</p>
                                <ul className="text-xl list-disc ml-8">
                                    {research.actions.map((action, index) => (
                                        <li key={index}>{action}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* To Top Button */}
                <ToTop bg="light" />
                <div className="h-24 bg-light" />
            </Layout>
        </main>
    )
}