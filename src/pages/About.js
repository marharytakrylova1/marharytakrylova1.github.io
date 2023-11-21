import Email from '../components/svg/Email';
import Phone from '../components/svg/Phone';
import LinkedIn from '../components/svg/LinkedIn';

export default function About() {
    return(
        <div>
            <div className="">
                <img src="header_image.jpg" alt="header_image" className="object-cover h-52 w-full"/>
                <div className="flex flex-row justify-between">
                    <div className="-mt-28 w-1/2">
                        <img src="margo_fullsize.jpg" alt="margo" className="object-cover w-[45%] mx-auto"/>
                    </div>
                    <div className="w-1/2 flex flex-col justify-between py-8">
                        <div>
                            <div className="text-5xl font-light text-duke mb-3">Marharyta Krylova</div>
                            <div className="text-xl text-duke">Duke University Class of 2026</div>
                        </div>
                        <div className="w-[85%]">I am a Duke University (class of 2026) student, majoring in Neuroscience, 
                            and minoring in Chemistry and Russian. I'm a goal-oriented, determined, 
                            and creative individual who is deeply passionate about research and addressing 
                            underrepresentation in medicine. My commitment to learning and community 
                            service drives my active involvement in health environments. Having emigrated 
                            from Ukraine in 2018, I bring global perspectives to my professional and 
                            community interactions.</div>
                        <div className="flex flex-row justify-between w-[70%]">
                            <a href="mailto:marharyta.krylova@duke.edu" className="flex flex-row items-center">
                                <Email height={30} fill="#C6DEF1" />
                                <div className='ml-3 text-sm'>marharyta.krylova@duke.edu</div>
                            </a>
                            <div className="flex flex-row items-center">
                                <Phone height={30} fill="#F2C6DE" />
                                <div className='ml-3 text-sm'>(407)-236-3581</div>
                            </div>
                            <a className="flex flex-row items-center" href="https://www.linkedin.com/in/marharytakrylova1/" rel='noreferrer' target='_blank'>
                                <LinkedIn height={30} fill="#C9E4DE"/>
                                <div className='ml-3 text-sm'>marharytakrylova1</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}