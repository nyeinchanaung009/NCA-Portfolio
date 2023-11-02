import { memo } from 'react'
import {Vibericon} from '../svgicons/Vibericon.jsx'

const Footer = memo(() => {
  return (
    <>
        {/* =========================================================== footer ================================================== */}
      <footer>
        <div className="bg-[url('/images/footer_bg_mobile.jpg')] md:bg-[url('/images/footer_bg_desktop.jpg')] bg-contain py-16 md:py-11">
          
          <div className="sm:w-11/12 lg:w-10/12 mx-auto flex justify-center items-center flex-wrap">
            <div className="w-full sm:w-6/12 md:w-4/12 text-center sm:text-start sm:flex sm:justify-start items-center">
              <img className="w-[65px] sm:w-[70px] mx-auto sm:mx-0 mb-2 sm:mb-0" src="/images/footer img.png" alt="footer image" />
              <div className="ms-3">
                <h1 className="font-finter text-tpri text-lg md:text-[22px]">NYEIN CHAN AUNG</h1>
                <h1 className="font-finter text-iconcolor text-[15px]">Thank you for visiting my website. <i className="bi bi-stars text-accentorange"></i></h1>
              </div>
            </div>

            <div className="w-full sm:w-6/12 md:w-4/12 flex flex-col justify-start items-center mt-8 sm:mt-0">
              <a className="font-finter text-iconcolor hover:text-accentblue duration-100 py-1" href="#about">About</a>
              <a className="font-finter text-iconcolor hover:text-accentblue duration-100 py-1" href="#skill">Skill</a>
              <a className="font-finter text-iconcolor hover:text-accentblue duration-100 py-1" href="#portfolio">Portfolio</a>
              <a className="font-finter text-iconcolor hover:text-accentblue duration-100 py-1" href="#projects">Projects</a>
              <h1 className="mt-2">🌎🚀✨🪐🌌</h1>
            </div>

            <div className="w-full sm:w-6/12 md:w-4/12 mt-10 mb-5 md:mt-0">
              <div className='flex justify-center items-center space-x-5 relative w-fit mx-auto'>
                <a className="text-slate-400/90 text-lg md:text-[21px] hover:text-tpri hover:scale-[1.2] duration-[0.12]" target="_blank" href="https://www.facebook.com/nyeinchanaung31817"><i className="bi bi-facebook"></i></a>
                <a className="text-slate-400/90 text-lg md:text-[21px] hover:text-tpri hover:scale-[1.2] duration-[0.12]" target="_blank" href="https://m.me/nyeinchanaung31817"><i className="bi bi-messenger"></i></a>
                <a className="text-slate-400/90 text-lg md:text-[21px] hover:text-tpri hover:scale-[1.2] duration-[0.12]" target="_blank" href="https://github.com/nyeinchanaung009"><i className="bi bi-github"></i></a>
                <div className='absolute top-[6px] -right-5 w-[4px] h-[23px] bg-accentorange'></div>
              </div>
              <div className='flex justify-center items-center space-x-5 mt-2'>
                <a className="text-slate-400/90 text-lg md:text-[21px] hover:text-tpri hover:scale-[1.2] duration-[0.12]" target="_blank" href="https://instagram.com/nyein_chan_aung_007?igshid=ZGUzMzM3NWJiOQ=="><i className="bi bi-instagram"></i></a>
                <a className="text-slate-400/90 text-lg md:text-[23px] hover:text-tpri hover:scale-[1.2] duration-[0.12]" target="_blank" href="viber://chat/?number=%2B959781652272"><Vibericon /></a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
})

export default Footer