import {Homeicon} from '../svgicons/Homeicon.jsx'
import {Person} from '../svgicons/Person.jsx'
import {Message} from '../svgicons/Message.jsx'
import { memo, useState } from 'react'

const MobileNav = memo(() => {
    const [navOpen,setNavOpen] = useState(false);

  return (
    <>
        {/* =========================================================== mobile nav ================================================== */}
        <div onClick={() => setNavOpen(false)} className={navOpen ? 'sm:hidden fixed top-0 left-0 w-full h-screen z-40 flex justify-center items-end bg-blurbg2 backdrop-blur-[3px]' : 'sm:hidden fixed top-0 left-0 w-full h-screen z-40 justify-center items-end bg-blurbg2 backdrop-blur-[3px] hidden'}>
            <div className="bg-blurbg w-full min-[410px]:w-[400px] mx-auto h-[320px] rounded-t-[19px] border-t-[3px] border-bordercolor backdrop-blur-sm shadow">
                <div className="text-end">
                    <button onClick={() => setNavOpen(false)} className="text-accentorange text-[20px] mt-1 me-2 hover:text-accentblue cursor-pointer p-2"><i className="bi bi-dash-circle"></i></button>
                </div>
                <div className="flex justify-evenly items-center px-3 mt-14">
                    <a href='#welcome' className='active block relative w-[100px] text-center group mobile-navlink nav-item'>
                        <Homeicon className="text-slate-200/90 text-[19.5px] mx-auto mb-[6px] group-hover:text-accentblue" />
                        <h1 className='font-fsora text-slate-200/90 text-[13.5px] font-light group-hover:text-accentblue'>Welcome</h1>
                    </a>
                    <a href='#about' className='block relative w-[100px] text-center group mobile-navlink nav-item'>
                        <Person className="text-slate-200/90 text-[19px] mx-auto mb-[6px] block group-hover:text-accentblue" />
                        <h1 className='font-fsora text-slate-200/90 text-[13.5px] font-light group-hover:text-accentblue'>About</h1>
                    </a>
                    <a href='#skill' className='block relative w-[100px] text-center group mobile-navlink nav-item'>
                        <i className="bi bi-layers text-slate-200/90 -translate-y-[1px] text-[18.5px] mb-[5px] mx-auto block group-hover:text-accentblue" />
                        <h1 className='font-fsora text-slate-200/90 -translate-y-1 text-[13.5px] font-light leading-5 group-hover:text-accentblue'>Skill</h1>
                    </a>
                </div>
                <div className="flex justify-evenly items-center px-3 mt-12">
                    <a href='#portfolio' className='block relative w-[100px] text-center group mobile-navlink nav-item'>
                        <i className="bi bi-code-slash text-slate-200/90 text-[21px] mx-auto block mb-[1px] group-hover:text-accentblue" />
                        <h1 className='font-fsora text-slate-200/90 text-[13.5px] font-light group-hover:text-accentblue'>Portfolio</h1>
                    </a>
                    <a href='#projects' className='block relative w-[100px] text-center group mobile-navlink nav-item'>
                        <i className="bi bi-briefcase text-slate-200/90 text-[17.5px] mx-auto block mb-[5px] group-hover:text-accentblue" />
                        <h1 className='font-fsora text-slate-200/90 text-[13.5px] font-light group-hover:text-accentbluet'>Projects</h1>
                    </a>
                    <a href='#contact' className='block relative w-[100px] text-center group mobile-navlink nav-item pt-1'>
                        <Message className="text-slate-200/90 text-[19.5px] mx-auto mb-[9px] group-hover:text-accentblue" />
                        <h1 className='font-fsora text-slate-200/90 text-[13.5px] font-light group-hover:text-accentblue'>Contact</h1>
                    </a>
                </div> 
            </div>
        </div>

        {!navOpen &&
        <div className='sm:hidden fixed w-full bottom-4 left-0 z-30'>
            <div className='w-[92%] min-[410px]:w-[400px] mx-auto rounded-md border-t-2 border-bordercolor py-[5px] bg-blurbg shadow flex justify-between items-center px-3 backdrop-blur-[2px]'>
                <a href='/' className='hover:scale-95 duration-150 dshadow'>
                    <img className='w-[36px]' src="/icons/logo.png" alt="logo" />
                </a>
                <button onClick={() => setNavOpen(true)} className='text-[21px] text-tsec hover:text-accentblue p-1 duration-100 tshadow'><i className="bi bi-grid "></i></button>
            </div>
        </div>
        }
    </>
  )
})

export default MobileNav