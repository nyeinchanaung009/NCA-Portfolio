import { Link, useNavigate } from 'react-router-dom'
import {Reacticon} from '../svgicons/Reacticon.jsx'
import {Tailwindicon} from '../svgicons/Tailwindicon.jsx'
import {Laravelicon} from '../svgicons/Laravelicon.jsx'
import {Vueicon} from '../svgicons/Vueicon.jsx'
import { memo } from 'react'

const Portfolio = memo(() => {

    const navigate = useNavigate();

  return (
    <>
        {/* =========================================================== portfolio section ================================================== */}
        <section id="portfolio" className="sm:min-h-[85vh] md:min-h-[93vh]">
            <div className="bg-bg3 pb-20 sm:py-28 md:py-32">
                <div className="w-11/12 md:w-10/12 mx-auto flex justify-center items-center flex-wrap">
                    <div  className="w-full sm:w-6/12 pt-16 pb-24 sm:pt-0 sm:pb-0 myanimation -translate-x-14 opacity-0 duration-[0.85s] ease-out delay-[0.3s]">
                        <img onClick={() => navigate('/projectdetail/1')} className="w-[300px] sm:w-[365px] mx-auto sm:mx-0 sm:ms-auto saturate-150 scale-y-[1.11] boxshadow hover:opacity-80 cursor-pointer" src="project_images/yfcMockup.png" alt="yfc" />
                    </div>
                    <div  className="w-full sm:w-6/12">
                        <div className="w-[180px] sm:w-[290px] sm:ps-8 md:ps-16 mx-auto sm:mx-0 relative">
                            <div className='myanimation -translate-x-14 opacity-0 duration-[0.85s] ease-out delay-[0.45s]'>
                                <h1 className="titleblock1 relative text-tpri font-finter font-bold text-[21px] tracking-wide"><span className="text-accentblue">Yangon Fitness</span> Club</h1>
                                <h1 className="text-tsec text-sm font-fsora font-extralight tracking-wide">Gym Membership web app</h1>
                                <div className="flex justify-start items-start space-x-3 mt-[14px] mb-5">
                                    <Laravelicon className="text-iconcolor text-[19px] cursor-pointer" />
                                    <Tailwindicon className="text-[22px] cursor-pointer" />
                                </div>
                            </div>
                            <Link to="/projectdetail/1" className="inline-block mybtn3 mt-2 myanimation -translate-x-20 opacity-0 ease-in">See more<i className="bi bi-arrow-right ms-2"></i></Link>
                            <h1 className='absolute -right-14 sm:-right-8 -top-14 text-[46px] font-bold font-fbebas tstroke'>#1</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bggra pb-20 sm:py-28 md:py-32">
                <div className="w-11/12 md:w-10/12 mx-auto flex justify-center items-center flex-wrap">
                    <div  className="w-full sm:w-6/12 order-2 sm:order-1 mt-8 sm:mt-0">
                        <div className="w-[175px] md:w-[290px] mx-auto xl:mx-0 xl:ms-auto relative text-end md:pe-16 lg:pe-0 xl:me-24">
                            <div className='myanimation -translate-x-14 opacity-0 duration-[0.85s] ease-out delay-[0.45s]'>
                                <h1 className="titleblock2 relative text-white font-finter font-bold text-[21px] tracking-wide">Pucca <span className="text-accentblue">Jewellery</span></h1>
                                <h1 className="text-tsec text-sm font-fsora font-extralight tracking-wide">Bussiness page & mini ecommerce</h1>
                                <div className="flex justify-end items-start space-x-3 mt-[14px] mb-5">
                                    <Reacticon className="text-iconcolor text-[22px] cursor-pointer" />
                                    <Tailwindicon className="text-[22px] cursor-pointer" />
                                </div>
                            </div>
                            <Link to="/projectdetail/2" className="inline-block mybtn3 mt-2 myanimation -translate-x-20 opacity-0 ease-in">See more<i className="bi bi-arrow-right ms-2"></i></Link>
                            <h1 className='absolute text-transparent right-36 sm:right-48 -top-14 text-[46px] font-bold font-fbebas tstroke'>#2</h1>
                        </div>
                    </div>
                    <div  className="w-full sm:w-6/12 order-1 sm:order-2 pt-16 pb-24 sm:pt-0 sm:pb-0 myanimation -translate-x-14 opacity-0 duration-[0.85s] ease-out delay-[0.3s]">
                        <img onClick={() => navigate('/projectdetail/2')} className="w-[300px] sm:w-[365px] mx-auto sm:mx-0 sm:-translate-x-6 md:-translate-x-10 saturate-[1.1] scale-y-[1.1] boxshadow hover:opacity-80 cursor-pointer" src="project_images/puccaMockup.png" alt="pucca mockup" />
                    </div>
                </div>
            </div>

            <div className="bg-bg3 pb-20 sm:py-28 md:py-32">
                <div className="w-11/12 md:w-10/12 mx-auto flex justify-center items-center flex-wrap">
                    <div className="w-full sm:w-6/12 pt-16 pb-24 sm:pt-0 sm:pb-0 myanimation -translate-x-14 opacity-0 duration-[0.85s] ease-out delay-[0.3s]">
                        <img onClick={() => navigate('/projectdetail/3')} className="w-[300px] sm:w-[360px] mx-auto sm:mx-0 sm:ms-auto saturate-150 brightness-90 scale-y-[1.1] boxshadow hover:opacity-80 cursor-pointer" src="/project_images/mvixMockup.png" alt="mvix mockup" />
                    </div>
                    <div  className="w-full sm:w-6/12">
                        <div className="w-[180px] sm:w-[290px] sm:ps-8 md:ps-16 mx-auto sm:mx-0 relative">
                            <div className='myanimation -translate-x-14 opacity-0 duration-[0.85s] ease-out delay-[0.45s]'>
                                <h1 className="titleblock1 relative text-tpri font-finter font-bold text-[21px] tracking-wide"><span className="text-accentblue">M-vix </span>Movies</h1>
                                <h1 className="text-tsec text-sm font-fsora font-extralight tracking-wide">Movies App</h1>
                                <div className="flex justify-start items-start space-x-3 mt-[14px] mb-5">
                                    <Vueicon className="text-iconcolor text-xl cursor-pointer" />
                                    <Tailwindicon className="text-[22px] cursor-pointer" />
                                </div>
                            </div>
                            <Link to="/projectdetail/3" className="inline-block mybtn3 mt-2 myanimation -translate-x-20 opacity-0 ease-in">See more<i className="bi bi-arrow-right ms-2"></i></Link>
                            <h1 className='absolute -right-8 sm:-right-2 -top-8 text-[46px] font-bold font-fbebas tstroke'>#3</h1>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
})

export default Portfolio