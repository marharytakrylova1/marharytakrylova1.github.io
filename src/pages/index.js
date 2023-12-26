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

export default function IndexPage() {

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
      link: "https://duke.edu/",
      text: "Durham, NC",
      icon: <LocationPNG width={60} />
    }
  ]

  return (
    <main>
      <Navbar />
      <title>Marharyta Krylova</title>
      <Aura />
      <div className="absolute left-0 right-0 top-0 h-screen">
        <img src={margo_landing} alt="Margo" className="absolute bottom-[19%] w-[35%] left-[50%] transform -translate-x-1/2" />

        {/* Floating infographics */}
        <div className="absolute left-[20%] top-[50%]">
          <div className="relative flex flex-col bg-white px-16 py-4 rounded-full text-center shadow">
            <p className="text-2xl font-bold">Duke University</p>
            <p className="text-duke text-xl">Class of 2026</p>
            <img src={duke_chapel} alt="Duke Chapel" className="absolute -z-10 bottom-[95%] left-[60%] w-[40%] transform -translate-x-1/2" />
          </div>
        </div>

        <div className="absolute left-[65%] top-[40%]">
          <div className="relative flex flex-col bg-white px-16 py-4 rounded-full text-center shadow">
            <p className="text-2xl font-bold">Major</p>
            <p className="text-duke text-xl">Neuroscience</p>
            <img src={brain} alt="Duke Chapel" className="absolute bottom-[80%] left-[75%] w-[60%] transform -translate-x-1/2" />
          </div>
        </div>

        <div className="absolute left-[70%] top-[60%]">
          <div className="relative flex flex-col bg-white px-16 py-4 rounded-full text-center shadow">
            <p className="text-2xl font-bold">Minors</p>
            <p className="text-duke text-xl">Russian, Chemistry</p>
            <img src={books} alt="Duke Chapel" className="absolute bottom-[45%] left-[110%] w-[50%] transform -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 h-[20%] bg-duke w-full">
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
      <p>hello</p>
      <h1>Home Page</h1>
      <p>Coming soon...</p>

    </main>
  )
}
