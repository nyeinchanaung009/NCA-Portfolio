import {Reacticon} from '../svgicons/Reacticon.jsx'
import {Laravelicon} from '../svgicons/Laravelicon.jsx'
import { memo } from 'react'

const About = memo(() => {
  return (
    <>
        {/* =========================================================== about section ================================================== */}
        <section id="about" className="sm:min-h-[85vh] md:min-h-[93vh] bg-bg4 bg-[url('/images/gradient_bg.png')] bg-cover pt-8 pb-16 lg:pb-0">
            <div className="w-11/12 md:w-10/12 mx-auto ">
                <h1 className="title">About Me</h1>
                <h1 className="subtitle">WHO AM I <span className="text-accentblue">?</span></h1>
            </div>

            <div className="w-11/12 xl:w-10/12 mx-auto sm:min-h-[75vh] md:min-h-[80vh] mt-8 md:mt-0 flex justify-center items-start sm:items-center flex-wrap">
                <div className="w-full lg:w-[40%] xl:w-5/12">
                    <div className="w-[255px] min-[400px]:w-[280px] md:w-[280px] lg:w-[325px] mx-auto mt-10 lg:mt-0 relative myanimation opacity-0 -translate-y-5 duration-[0.8s] delay-[0.2s] ease-in">
                        <img className="w-full object-cover" src="/images/about img.png" alt="about image" />
                        <div className="absolute w-full h-full left-0 top-0">
                            <div style={{perspective:'500px',transformStyle:'preserve-3d'}} className="rotator w-full h-full relative">
                                <div className="iconball iconball1 absolute w-[55%] h-[35px] left-[50%] top-[46%] text-end text-lg"><span id='ball1' className='inline-block bitem px-[6px] text-tpri text-[15px] rounded-full border border-white/40 bg-bg2'><i className="bi bi-github"></i></span></div>
                                <div className="iconball iconball2 absolute w-[53%] h-[35px] left-[50%] top-[46%] text-end text-lg"><span id='ball2' className='inline-block bitem px-[6px] text-tpri text-[15px] rounded-full border border-white/40 bg-bg2'><i className="bi bi-code-slash"></i></span></div>
                                <div className="iconball iconball3 absolute w-[57%] h-[35px] left-[50%] top-[46%] text-end text-lg"><span id='ball3' className='inline-block bitem text-[17px] px-[6px] pb-[2px] text-tpri rounded-full border border-white/40 bg-bg2'><Laravelicon className="inline" /></span></div>
                                <div className="iconball iconball4 absolute w-[56%] h-[35px] left-[50%] top-[46%] text-end text-lg"><span id='ball4' className='inline-block bitem px-[6px] text-tpri text-[15px] rounded-full border border-white/40 bg-bg2'><i className="bi bi-braces"></i></span></div>
                                <div className="iconball iconball5 absolute w-[54%] h-[35px] left-[50%] top-[46%] text-end text-lg"><span id='ball5' className='inline-block bitem text-[19px] pb-[1px] px-[5px] text-tpri rounded-full border border-white/40 bg-bg2'><Reacticon className="inline mb-1" /></span></div>
                                <div className="iconball iconball6 absolute w-[52%] h-[35px] left-[50%] top-[46%] text-end text-lg"><span id='ball6' className='bg-secblue w-4 h-4 inline-block rounded-full'></span></div>
                                <div className="iconball iconball7 absolute w-[53.5%] h-[35px] left-[50%] top-[46%] text-end text-lg"><span id='ball7' className='bg-tpri w-3 h-3 inline-block rounded-full'></span></div>
                                <div className="iconball iconball8 absolute w-[51%] h-[35px] left-[50%] top-[46%] text-end text-lg"><span id='ball8' className='bg-tsec w-5 h-5 inline-block rounded-full'></span></div>
                            </div>
                        </div>
                        <div className='minidot absolute left-0 top-[48%] w-[50%] h-2'>
                            <div className='w-2 h-2 absolute rounded-full bg-iconcolor ms-[13px] lg:ms-[18px]'></div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[60%] xl:w-7/12">
                    <h1 className="sm:w-[540px] md:w-[730px] lg:w-[98%] mx-auto font-finter text-center leading-[30px] text-[15px] text-tsec font-light mt-12 lg:mt-0 px-1 sm:px-5 myanimation -translate-x-2 opacity-0 duration-700 ease-in delay-[0.3s]">
                        <span className="font-semibold text-accentblue">Mingalarbar!</span>  
                        I'm a Web Developer with a passion for creating 
                        awesome websites and applications. With a solid foundation
                        in both front-end and back-end development. I enjoy every
                        aspect of the development process. I love the process of
                        turning ideas into reality through clean and efficient code
                        and aIso love designing user-friendly interfaces using front-end
                        technologies, building powerful server-side functionality
                        using technologies like PHP and LaraveI. I pay attention to
                        every little detail. I'm constantly expanding my knowledge
                        and exploring new frameworks and tools to stay up-to-date
                        with the latest industry and technologies. Let's collaborate
                        and bring innovative ideas for amazing digital experiences!
                    </h1>
                    <div className="flex justify-around items-center flex-wrap mt-8">
                        <a href='/pdf/Nyein Chan Aung CV 0.1.pdf' download className="mybtn myanimation -translate-y-10 opacity-0 duration-700 ease-in delay-[0.2s] mb-4 sm:mb-0"><i className="bi bi-stars me-1"></i>Download CV<i className="bi bi-download ms-3"></i></a>
                        <div className="relative flex myanimation -translate-x-10 opacity-0 duration-700 ease-out delay-[0.4s]">
                            <a target="_blank" href="https://www.facebook.com/nyeinchanaung31817" className="text-iconcolor text-lg sm:text-xl mx-1 sm:mx-3 hover:text-tpri hover:scale-[1.2] duration-[0.12s]"><i className="bi bi-facebook"></i></a>
                            <a target="_blank" href="https://instagram.com/nyein_chan_aung_007?igshid=ZGUzMzM3NWJiOQ==" className="text-iconcolor text-lg sm:text-xl mx-1 sm:mx-3 hover:text-tpri hover:scale-[1.2] duration-[0.12]"><i className="bi bi-instagram"></i></a>
                            <a target="_blank" href="https://github.com/nyeinchanaung009" className="text-iconcolor text-lg sm:text-xl mx-1 sm:mx-3 hover:text-tpri hover:scale-[1.2] duration-[0.12s]"><i className="bi bi-github"></i></a>
                            <span className="absolute w-[4px] h-[80%] top-1 -right-3 bg-accentorange"></span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
})

export default About