import { memo } from 'react'
import {Folder} from '../svgicons/Folder.jsx'

const Projects = memo(() => {
  return (
    <>
      {/* =========================================================== projects section ================================================== */}
      <section id="projects" className="sm:min-h-[70vh] md:min-h-[80vh] bggra pb-10 relative">
        <div className="w-11/12 md:w-10/12 mx-auto relative z-10 pt-12">

          <div className="">
            <h1 className="title">Other Projects</h1>
            <h1 className="subtitle">RECENTLY CREATED</h1>
          </div>

          <div className="flex justify-center items-center flex-wrap mt-16 myanimation opacity-0 translate-y-6 duration-500 delay-[0.2s] ease-in">

            <div className="w-[300px] h-[275px] p-3 bg-cardbg shadow overflow-hidden relative z-10 group mb-5 mx-[7px] border-b border-slate-700/80">
              <div className="flex justify-between items-center px-2 pt-2">
                <div>
                  <h1 className="font-finter font-semibold tracking-wide text-tpri text-[19px] mb-1">Tenki Weather</h1>
                  <h1 className="font-fsora text-tmute text-[13px] font-light mb-2">Weather Forecasting app</h1>
                </div>
                <div>
                  <Folder className="text-accentblue text-2xl me-2" />
                </div>
              </div>
              <div className='w-[295px]'>
                <img className="w-full group-hover:opacity-70 mx-auto rounded-sm -rotate-[10deg] -translate-x-[7px] translate-y-[42px] scale-y-125" src="/project_images/tenki.png" alt="" />
              </div>
              <div className='translate-y-[102%] group-hover:translate-y-0 duration-200 absolute z-10 bottom-0 left-0 w-full flex justify-center items-center'>
                <a href='https://github.com/nyeinchanaung009/tenki-weather' target="_blank" className='text-center flex-1 bg-[#0a0f1327] text-[#e6edf3] border-t border-bordercolor py-[7px] hover:bg-[#0a0f13b6] font-medium'><i className="bi bi-github me-2"></i>View Code</a>
                <a href='https://tenki-weather.pages.dev/' target="_blank" className='text-center flex-1 text-tpri bg-secblue py-[7px] hover:bg-accentorange font-medium'><i className="bi bi-eye-fill me-2"></i>View Demo</a>
              </div>
              <div className='absolute w-full h-[50%] bottom-0 left-0 overlay'></div>
            </div>
            <div className="w-[300px] h-[275px] p-3 bg-cardbg shadow overflow-hidden relative group mb-5 mx-[7px] border-b border-slate-700/80">
              <div className="flex justify-between items-center px-2 pt-2">
                <div>
                  <h1 className="font-finter font-semibold tracking-wide text-tpri text-[19px] mb-1">Migo Shop</h1>
                  <h1 className="font-fsora text-tmute text-[13px] font-light mb-2">Add to Cart System</h1>
                </div>
                <div>
                  <Folder className="text-accentblue text-2xl me-2" />
                </div>
              </div>
              <div className='w-[295px]'>
                <img className="w-full group-hover:opacity-70 mx-auto rounded-sm -rotate-[10deg] -translate-x-[7px] translate-y-[42px] scale-y-125 saturate-150" src="/project_images/migo.png" alt="migo shop" />
              </div>
              <div className='translate-y-[102%] group-hover:translate-y-0 duration-200 absolute z-10 bottom-0 left-0 w-full flex justify-center items-center'>
                <a href='https://github.com/nyeinchanaung009/migo-shop' target='_blank' className='text-center flex-1 bg-[#0a0f1344] text-[#e6edf3] border-t border-bordercolor py-[7px] hover:bg-[#0a0f13d3] font-medium'><i className="bi bi-github me-2"></i>View Code</a>
                <a href='https://migo-shop.pages.dev/' target='_blank' className='text-center flex-1 text-tpri bg-secblue py-[7px] hover:bg-accentorange font-medium'><i className="bi bi-eye-fill me-2"></i>View Demo</a>
              </div>
              <div className='absolute w-full h-[50%] bottom-0 left-0 overlay'></div>
            </div>

          </div>

          <div className="flex justify-center items-center flex-wrap">

            <div className="w-[300px] h-[275px] p-3 bg-bg3 shadow-md overflow-hidden relative group mb-5 mx-[7px] border-r border-l border-b border-slate-700/60">
              <div className="flex justify-between items-center px-2 pt-2">
                <div>
                  <h1 className="font-finter font-semibold tracking-wide text-tpri text-[19px] mb-1">Portfolio 2</h1>
                  <h1 className="font-fsora text-tmute text-[13px] font-light mb-2">Alternate Design</h1>
                </div>
                <div>
                  <Folder className="text-accentblue text-2xl me-2" />
                </div>
              </div>
              <div className='w-[295px]'>
                <img className="w-full group-hover:opacity-70 mx-auto rounded-sm -rotate-[10deg] -translate-x-[7px] translate-y-[42px] scale-y-125 border border-slate-500/10 saturate-[1.25]" src="/project_images/portfolio2.png" alt="protfolio2" />
              </div>
              <div className='translate-y-[102%] group-hover:translate-y-0 duration-200 absolute z-10 bottom-0 left-0 w-full flex justify-center items-center'>
                <a href='https://github.com/nyeinchanaung009/Portfolio-2' target='_blank' className='text-center flex-1 bg-[#0a0f1325] text-[#e6edf3] border-t border-bordercolor py-[7px] hover:bg-[#0a0f139f] font-medium'><i className="bi bi-github me-2"></i>View Code</a>
                <a href='https://nyeinchanaung009.github.io/Portfolio-2' target='_blank' className='text-center flex-1 text-tpri bg-secblue py-[7px] hover:bg-accentorange font-medium'><i className="bi bi-eye-fill me-2"></i>View Demo</a>
              </div>
              <div className='absolute w-full h-[50%] bottom-0 left-0 overlay'></div>
            </div>
            <div className="w-[300px] h-[275px] p-3 bg-bg3 shadow-md overflow-hidden relative group mb-5 mx-[7px] border-r border-l border-b border-slate-700/60">
              <div className="flex justify-between items-center px-2 pt-2">
                <div>
                  <h1 className="font-finter font-semibold tracking-wide text-tpri text-[19px] mb-1">Aroma Coffee</h1>
                  <h1 className="font-fsora text-tmute text-[13px] font-light mb-2">Static landing page</h1>
                </div>
                <div>
                  <Folder className="text-accentblue text-2xl me-2" />
                </div>
              </div>
              <div className='w-[295px]'>
                <img className="w-full group-hover:opacity-70 mx-auto rounded-sm -rotate-[10deg] -translate-x-[7px] translate-y-[42px] scale-y-125 border border-gray-500/10" src="/project_images/aroma coffee.png" alt="aroma coffee" />
              </div>
              <div className='translate-y-[102%] group-hover:translate-y-0 duration-200 absolute z-10 bottom-0 left-0 w-full flex justify-center items-center'>
                <a href='https://github.com/nyeinchanaung009/Aroma-Coffee-landing-page' target='_blank' className='text-center flex-1 bg-[#0a0f1325] text-[#e6edf3] border-t border-bordercolor py-[7px] hover:bg-[#0a0f13a8] font-medium'><i className="bi bi-github me-2"></i>View Code</a>
                <a href='https://nyeinchanaung009.github.io/Aroma-Coffee-landing-page ' target='_blank' className='text-center flex-1 text-tpri bg-secblue py-[7px] hover:bg-accentorange font-medium'><i className="bi bi-eye-fill me-2"></i>View Demo</a>
              </div>
              <div className='absolute w-full h-[50%] bottom-0 left-0 overlay'></div>
            </div>

          </div>

        </div>

        <div className='hidden sm:block absolute -left-[95px] top-[12%] w-[230px]'>
          <img src="/icons/react pj_bg_icon.png" alt="react" />
        </div>
        <div className='hidden sm:block absolute -right-[80px] bottom-[8%] w-[230px]'>
          <img className='opacity-70' src="/icons/laravel pj_bg_icon.png" alt="react" />
        </div>
      </section>
    </>
  )
})

export default Projects