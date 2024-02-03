import * as React from "react"
import Navbar from "../components/navbar"
import Aura from "../components/aura"
import margo_landing from "../images/margo_landing.png"
import duke_chapel from "../images/duke_chapel.png"
import brain from "../images/brain.png"
import books from "../images/books.png"
import LinkedInSVG from "../components/linkedin"
import EmailPNG from "../components/email"
import LocationPNG from "../components/location"
import BlueRipple from "../components/blue_ripple"
import PurpleRipple from "../components/purple_ripple"
import duke_logo from "../images/duke_logo.png"
import valencia_logo from "../images/valencia_logo.png"
import olympia_logo from "../images/olympia_logo.png"
import nat_reg_health from "../images/nat_reg_health.png"
import bace from "../images/bace.png"
import aesthetics_accr from "../images/aesthetics_accr.png"
import amer_red_cross from "../images/amer_red_cross.png"

export default function IndexPage() {
  const [margoWidth, setMargoWidth] = React.useState(0);

  React.useEffect(() => {
    document.title = "Marharyta Krylova";
    // Add resize event listener
    window.addEventListener("resize", () => setMargoWidth(document.getElementById("margo").clientWidth));
    setMargoWidth(document.getElementById("margo").clientWidth);

    // Remove resize event listener
    return () => window.removeEventListener("resize", () => setMargoWidth(document.getElementById("margo").clientWidth));
  }, []);

  React.useEffect(() => {
    let margo = document.getElementById("margo");
    let margo_bound = margo.getBoundingClientRect();
    let margo_x = (margo_bound.left + margo_bound.right) / 2;
    let margo_y = margo_bound.bottom;

    // School formatting
    let school = document.getElementById("school");
    let chapel = document.getElementById("chapel");
    let school_x_diff = 0.8 * margoWidth
    let school_y_diff = 0.5 * margoWidth
    school.style.left = `calc(${margo_x - school_x_diff}px)`;
    school.style.top = `calc(${margo_y - school_y_diff}px)`;
    chapel.style.width = `${0.15 * margoWidth}px`;

    // Major formatting
    let major = document.getElementById("major");
    let brain = document.getElementById("brain");
    let major_x_diff = 0.6 * margoWidth;
    let major_y_diff = 0.7 * margoWidth;
    major.style.left = `calc(${margo_x + major_x_diff}px)`;
    major.style.top = `calc(${margo_y - major_y_diff}px)`;
    brain.style.width = `${0.25 * margoWidth}px`;

    // Minor formatting
    let minors = document.getElementById("minors");
    let books = document.getElementById("books");
    let minors_x_diff = 0.8 * margoWidth;
    let minors_y_diff = 0.3 * margoWidth;
    minors.style.left = `calc(${margo_x + minors_x_diff}px)`;
    minors.style.top = `calc(${margo_y - minors_y_diff}px)`;
    books.style.width = `${0.2 * margoWidth}px`;

  }, [margoWidth]);

  let socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/marharytakrylova1/",
      text: "marharytakrylova1",
      icon: <LinkedInSVG width={60} />
    },
    {
      name: "Email",
      link: "mailto:marharyta.krylova@duke.edu",
      text: "marharyta.krylova@duke.edu",
      icon: <EmailPNG width={60} />
    },
    {
      name: "Location",
      link: "https://www.durhamnc.gov/",
      text: "Durham, NC",
      icon: <LocationPNG width={60} />
    }
  ]

  let education = [
    {
      name: "Duke University",
      time: "Aug 2022 - May 2026",
      heading: "Bachelor of Science Degree\nMajor: Neuroscience\nMinors: Chemistry, Russian",
      coursework: "Leadership in Healthcare, Medical Ethics, Aging, & End-of-Life Care, Bio-Bases of Neuroscience, Personal Finance, Cognitive Neuroscience",
      logo: duke_logo
    },
    {
      name: "Valencia College",
      time: "Feb 2020 - May 2022",
      heading: "Associate's of Arts Degree\nPhi Theta Kappa Honor Society\nPresident's List",
      coursework: "Human Anatomy & Physiology I, Introduction to Business",
      logo: valencia_logo
    },
    {
      name: "Olympia High School",
      time: "May 2018 - May 2022",
      heading: "General Education Degree\nPLTW Biomedical Program\nPrincipal's Award",
      coursework: "Principles of Biomedical Science, Human Body Systems, Medical Interventions, Biomedical Innovations",
      logo: olympia_logo
    }
  ]

  let certifications = [
    {
      name: "Phlebotomy Technician",
      organization: "National Registry of Allied Health Professionals",
      cred_id: "NPCN-16961-6068\n(Exp: 10/2025)",
      image: nat_reg_health
    },
    {
      name: "Biotechnician Assistant Credential (BACE)",
      organization: "Biotility: Biotechnology Professional Development",
      cred_id: "32648389",
      image: bace
    },
    {
      name: "Infection Control and Prevention",
      organization: "Aesthetics Accreditations International Infection Control and Prevention",
      cred_id: "4604818354611656702",
      image: aesthetics_accr
    },
    {
      name: "Adult First Aid CPR/AED",
      organization: "American Red Cross",
      cred_id: "018I956\n(Exp: 06/2025)",
      image: amer_red_cross
    }
  ]

  return (
    <main>
      <Navbar />
      <div className="relative h-screen w-full">
        {/* Floating elements that are dynamically updated by useEffect */}
        {/* School */}
        <div id="school" className="absolute transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex flex-col bg-white px-12 py-4 rounded-full text-center shadow">
            <p className="text-2xl font-bold">Duke University</p>
            <p className="text-duke text-xl">Class of 2026</p>
            <img id="chapel" src={duke_chapel} alt="Duke Chapel" className="absolute -z-10 bottom-[95%] left-[60%] transform -translate-x-1/2" />
          </div>
        </div>

        {/* Major */}
        <div id="major" className="absolute transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex flex-col bg-white px-12 py-4 rounded-full text-center shadow">            
            <p className="text-2xl font-bold">Major</p>
            <p className="text-duke text-xl">Neuroscience</p>
            <img id="brain" src={brain} alt="Duke Chapel" className="absolute z-10 bottom-[85%] left-[60%] transform -translate-x-1/2" />
          </div>
        </div>

        {/* Minors */}
        <div id="minors" className="absolute transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex flex-col bg-white px-12 py-4 rounded-full text-center shadow">            
            <p className="text-2xl font-bold">Minors</p>
            <p className="text-duke text-xl whitespace-nowrap">Russian, Chemistry</p>
            <img id="books" src={books} alt="Duke Chapel" className="absolute z-10 bottom-[45%] left-[110%] transform -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>

        {/* Begin landing page */}
        <div className="absolute top-0 left-0 w-full h-[80%]">
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
            <Aura width={margoWidth * 2} height={margoWidth * 1.3} />
          </div>
          <img id="margo" src={margo_landing} alt="Margo Landing" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[35%] max-w-[600px]"/>
          <div id="margo_circ" className="absolute bg-yellow-500 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-duke h-[20%]">
          <div className="flex flex-row justify-around items-center h-full">
            {socials.map((social) => (
              <a href={social.link} target="_blank" rel="noreferrer" className="flex flex-row items-center space-x-6">
                {social.icon}
                <p className="text-white text-lg">{social.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="w-full bg-duke text-white text-center">
        <p className="text-4xl font-semibold">About Me</p>
        <p className="px-24 max-w-[120ch] mx-auto pt-4 pb-8">I am a Duke University student, majoring in Neuroscience, and minoring in Chemistry and Russian. 
        Dedicated to achieving my goal of becoming a competent physician, I find particular interest in neurosurgery. I am also deeply 
        interested in healthcare strategy and the intersection between business/finance and healthcare. My career aspirations include 
        continuing education, research, serving patients and communities, and addressing under-representation in medicine — a direct 
        result of my cultural background, exposure to medical experiences, and community service. Emigrating from Ukraine in 2018 due 
        to political instability has provided me with unique global perspectives, which I apply to my academic and community pursuits.</p>
      </div>
      <BlueRipple rotate={true} bg="#F9F9F9" />

      {/* Education section */}
      <div className="bg-light pb-24">
        <p className="text-4xl text-center font-semibold pt-8 pb-12">Education</p>
        <div className="grid grid-cols-3 gap-8 mx-16">
          {education.map((school) => (
            <div className="bg-white rounded-2xl p-6 flex flex-col justify-around space-y-4 shadow">
              <div className="flex flex-row items-center space-x-4">
                <img src={school.logo} alt="Duke Logo" className="w-1/2" />
                <div>
                  <p className="text-2xl font-semibold">{school.name}</p>
                  <p className="text-lg">{school.time}</p>
                </div>

              </div>
              <div className="font-semibold">
              {school.heading.split("\n").map((line) => (
                <p className="text-lg">{line}</p>
              ))}
              </div>
              <p className="text-lg">Relevant Coursework:<br />{school.coursework}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <PurpleRipple rotate={false} bg="#F9F9F9" />
      <div className="bg-purple pb-24">
        <p className="text-4xl text-white text-center font-semibold pt-8 pb-12">Certifications</p>
        <div className="grid grid-cols-2 gap-8 w-3/4 mx-auto">
          {certifications.map((cert) => (
            <div className="bg-white rounded-2xl p-8 flex flex-col justify-around space-y-4 shadow">
                <p className="text-2xl text-duke font-semibold">{cert.name}</p>
                <p className="text-lg font-semibold">{cert.organization}</p>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-lg">Credential ID:<br /></p>
                    {cert.cred_id.split("\n").map((line) => (
                      <p>{line}</p>
                    ))}
                  </div>
                  <img src={cert.image} alt="Certification" className="h-24" />
                </div>
              </div>
          ))}
        </div>
      </div>
      <PurpleRipple rotate={true} />

    </main>
  )
}
