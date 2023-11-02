import { memo } from "react"
import {Message} from "../svgicons/Message.jsx"

const Welcome = memo(() => {
  return (
    <>
      {/* =========================================================== welcome section ================================================== */}
      <section id="welcome" className="sm:pt-[52px] bggra3 pb-20 sm:pb-0">
        <div className="w-11/12 md:w-10/12 mx-auto sm:min-h-[80vh] md:min-h-[65vh] lg:min-h-[93vh] relative flex justify-center items-start sm:items-center flex-wrap">
          
          <div className="w-full sm:w-6/12 md:w-[46%] order-2 sm:order-1 mt-14 sm:mt-0 px-2 sm:px-0">
            <h1 className="font-finter font-medium text-lg text-transparent cliptext bggra2 myanimation opacity-0 -translate-x-28 duration-[1.8s] delay-[0.4s] ease-out">Hi, I'm</h1>
            <h1 className="font-finter tracking-wider text-tpri text-[26px] lg:text-[32px] mb-3 myanimation -translate-x-5 opacity-0 duration-[1.2s] delay-1000 ease-out">NYEIN CHAN <span className="text-transparent cliptext font-medium bgbtn">AUNG</span></h1>
            <h1 className="font-fsora text-tsec text-[17px] mb-2 md:mb-1 myanimation opacity-0 -translate-y-9 duration-[1.2s] delay-[0.85s] ease-out">Welcome to my Portfolio. I'am Frontend & Backend Developer.</h1>
            <h1 className="font-fpop tracking-[2px] text-tmute font-extralight text-[15px] myanimation opacity-0 -translate-y-9 duration-[1.2s] delay-[0.85s] ease-out">Let's work together and create amazing digital experiences!<i className="bi bi-stars ms-2 text-accentorange"></i></h1>
            <a href="#contact" className="mybtn2 block w-fit mt-12 sm:mt-5 relative group myanimation opacity-0 -translate-x-28 duration-[1.8s] delay-[0.5s] ease-out">Contact <Message className="absolute top-3 right-7 text-[17.5px] text-white group-hover:right-[22px] duration-[0.4s]" /></a>
          </div>

          <div className="w-full sm:w-6/12 md:w-[54%] md:self-end order-1 sm:order-2">
            <div className="w-[298px] min-[400px]:w-[330px] sm:w-[345px] md:w-[430px] lg:w-[550px] xl:w-[690px] mx-auto -translate-x-6">
              <img className="w-full object-contain brightness-[.94] saturate-[1.1] myanimation opacity-0 -translate-x-20 duration-[2.1s] delay-[0.4s] ease" src="/images/home img.png" alt="home image" />
            </div>
          </div>

          <a href="#about" className="hidden sm:block absolute bottom-11 left-[30%] group">
              <i className="bi bi-mouse text-accentblue me-[6px]"></i>
              <span className="font-fpop text-[13px] text-tsec font-light group-hover:text-tpri">Scroll down</span>
              <i id="arrowdown" className="inline-block bi bi-arrow-down-short text-xl text-tmute ms-1"></i>
          </a>
        </div>
      </section> 
    </>
  )
})

export default Welcome