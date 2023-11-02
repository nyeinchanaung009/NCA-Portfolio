import {Vector} from '../svgicons/Vector.jsx'
import {Server} from '../svgicons/Server.jsx'
import { memo } from 'react'

const Skill = memo(() => {
  return (
    <>
      {/* =========================================================== skill section ================================================== */}
        <section id="skill" className="sm:min-h-[93vh] md:min-h-[100vh] aboutbg pb-14">
            <div className="skillbg sm:pt-[52px]">
                <div className="">
                    <h1 className="title">Skill</h1>
                    <h1 className="subtitle">WHAT I DO <span className="text-accentblue">?</span></h1>
                </div>

                <div className="w-11/12 md:w-10/12 mx-auto flex justify-center items-center flex-wrap mt-14">
                    <div className='skillcardmain cursor-pointer mb-10 mx-2 sm:mx-5 lg:mx-6 myanimation -translate-y-8 opacity-0 duration-[0.42s] ease-out delay-[0.2s]'>
                        <div className="w-[263px] sm:w-[272px] relative bggra p-5 border-b-4 border-slate-800 skillcard c1 duration-[0.8s]">
                            <div className="front text-center border_top">
                                <img className="w-[72px] mx-auto pt-8 pb-7" src="/icons/pen.png" alt="pen" />
                                <h1 className="font-bold font-finter text-tsec pt-4 text-[17px]">UX/UX</h1>
                                <h2 className="font-fsora font-light text-sm pb-2 text-tmute">Web Design</h2>
                            </div>
                            <div className="back px-4 pt-8 absolute w-full h-full left-0 top-0 bg-bg2 -z-10">
                                <div className='rounded-full bg-bg3 w-fit mx-auto px-3 py-[13px] mb-3'>
                                    <Vector className="text-[22px] text-accentblue" />
                                </div>    
                                <h1 className='font-fsora text-tsec text-[15px] font-light text-center leading-6 mt-6'>
                                    Wireframing and Prototyping of 
                                    web interfaces. Illustrate 
                                    custom svg and make banners 
                                    & posters desgin for web page 
                                    if necessary
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className='skillcardmain cursor-pointer mb-10 mx-2 sm:mx-5 lg:mx-6 myanimation -translate-y-8 opacity-0 duration-[0.42s] ease-out delay-[0.4s]'>
                        <div className="w-[263px] sm:w-[272px] relative bg-cardbg p-5 border-b-4 border-accentblue skillcard c2 duration-[0.8s]">
                            <div className="front border_top">
                                <img className="w-[72px] mx-auto pt-8 pb-7" src="/icons/CodeSlash.png" alt="pen" />
                                <h1 className="w-[75%] mx-auto font-bold font-finter text-tsec pt-4">Frontend</h1>
                                <h2 className="w-[75%] mx-auto font-fsora font-light text-sm pb-2 text-tmute">Development</h2>
                            </div>
                            <div className="back px-4 pt-8 absolute w-full h-full left-0 top-0 bg-bg2 -z-10">
                                <div className='rounded-full bg-bg3 w-fit mx-auto px-3 py-[8px] mb-3'>
                                    <i className="bi bi-braces text-[24px] text-accentblue" />
                                </div>    
                                <h1 className='font-fsora text-tsec text-[15px] font-light text-center leading-6 mt-5'>
                                    Develop custom web pages, 
                                    Portfolio websites, landing 
                                    pages and static websites 
                                    using current technologies and 
                                    framework
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className='skillcardmain cursor-pointer mb-10 mx-2 sm:mx-5 lg:mx-6 myanimation -translate-y-8 opacity-0 duration-[0.42s] ease-out delay-[0.6s]'>
                        <div className="w-[263px] sm:w-[272px] relative bg-cardbg p-5 border-b-4 border-accentblue skillcard c3 duration-[0.8s]">
                            <div className="front border_top">
                                <img className="w-[72px] mx-auto pt-8 pb-7" src="/icons/code-branch.png" alt="pen" />
                                <h1 className="w-[75%] mx-auto font-bold font-finter text-tsec pt-4 text-[17px]">Backend</h1>
                                <h2 className="w-[75%] mx-auto font-fsora font-light text-sm pb-2 text-tmute">Development</h2>
                            </div>
                            <div className="back px-4 pt-8 absolute w-full h-full left-0 top-0 bg-bg2 -z-10">
                                <div className='rounded-full bg-bg3 w-fit mx-auto px-3 py-[13px] mb-3'>
                                    <Server className="text-[22px] text-accentblue" />
                                </div>    
                                <h1 className='font-fsora text-tsec text-[15px] font-light text-center leading-6 mt-3'>
                                    Develop admin pannel,
                                    ecommerce, and other 
                                    backend relative websites with php,
                                    laravel and mySql 
                                    database, api, integrate O-auth authentication
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[95%] md:w-10/12 mx-auto mt-16 md:mt-[150px] pb-16'>
                <h1 className="title">Technologies</h1>
                <h1 className="subtitle">& LANGUAGES</h1>
                <div className='flex justify-evenly items-center flex-wrap mt-12'>
                    <div className='w-[96%] sm:w-[400px] md:w-[310px] lg:w-[395px] xl:w-[400px] myanimation -translate-y-4 opacity-0 duration-500 ease-out delay-[0.3s]'>
                        <h1 className='text-sm font-fsora text-tsec mb-1'>Frontend</h1>
                        <div className='relative z-10 overflow-hidden w-full bg-blurbg2 rounded-lg border-t-2 border-bordercolor px-4 sm:px-6 py-8 shadow backdrop-blur-[1px]'>
                            <div className='flex justify-around items-center'>
                                <div className='w-[50px]'>
                                    <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='HTML' src="/icons/html.png" alt="html" />
                                    <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>HTML</h1>
                                </div>
                                <div className='w-[50px]'>
                                    <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='CSS' src="/icons/css.png" alt="css" />
                                    <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>CSS</h1>
                                </div>
                                <div className='w-[50px]'>
                                    <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='Bootstrap' src="/icons/bootstrap.png" alt="bootstrap" />
                                    <h1 className='font-fpop text-tsec text-xs mt-2 text-center -translate-x-1'>Bootstrap</h1>
                                </div>
                                <div className='w-[50px]'>
                                    <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='Tailwind' src="/icons/tailwind.png" alt="tailwind" />
                                    <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>Tailwind</h1>
                                </div>
                            </div>
                            <div className='flex justify-around items-center mt-12'>
                                <div className='w-[50px]'>
                                    <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='JS' src="/icons/javascript.png" alt="js" />
                                    <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>Js</h1>
                                </div>
                                <div className='w-[50px]'>
                                    <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='JQuery' src="/icons/jquery.png" alt="jquery" />
                                    <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>JQuery</h1>
                                </div>
                                <div className='w-[50px]'>
                                    <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='React JS' src="/icons/react.png" alt="reactjs" />
                                    <h1 className='font-fpop text-tsec text-xs mt-2 text-center -translate-x-1'>ReactJS</h1>
                                </div>
                                <div className='w-[50px]'>
                                    <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='Vue JS' src="/icons/vue.png" alt="vuejs" />
                                    <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>Vue JS</h1>
                                </div>
                            </div>
                            <div className='skillboxoverlay'></div>
                        </div>
                    </div>

                    <div className='w-[96%] sm:w-[400px] md:w-[310px] lg:w-[395px] xl:w-[400px] mt-5'>
                        <div className='w-full  md:-translate-y-5'>
                            <h1 className='text-sm font-fsora text-tsec mb-1'>Backend</h1>
                            <div className='relative z-10 overflow-hidden w-full bg-blurbg2 rounded-lg border-t-2 border-bordercolor px-4 sm:px-6 pt-4 pb-3 shadow backdrop-blur-[1px] myanimation -translate-y-3 opacity-0 duration-500 ease-out delay-[0.4s]'>
                                <div className='flex justify-around items-center'>
                                    <div className='w-[50px]'>
                                        <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='PHP' src="/icons/php.png" alt="php" />
                                        <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>PHP</h1>
                                    </div>
                                    <div className='w-[50px]'>
                                        <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='Laravel' src="/icons/laravel.png" alt="laravel" />
                                        <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>Laravel</h1>
                                    </div>
                                    <div className='w-[50px]'>
                                        <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='Mysql' src="/icons/mysql.png" alt="mysql" />
                                        <h1 className='font-fpop text-tsec text-xs mt-2 text-center -translate-x-1'>Mysql</h1>
                                    </div>
                                    <div className='w-[50px]'>
                                        <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='Git' src="/icons/git.png" alt="git" />
                                        <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>Git</h1>
                                    </div>
                                </div>
                                <div className='skillboxoverlay'></div>
                            </div>
                        </div>
                        <div className='w-full mt-6 md:mt-0'>
                            <h1 className='text-[13px] font-fsora text-tsec mb-1'>UI & Design</h1>
                            <div className='relative z-10 overflow-hidden w-full bg-blurbg2 rounded-lg border-t-2 border-bordercolor px-4 sm:px-6 pt-4 pb-3 shadow backdrop-blur-[1px] myanimation -translate-y-3 opacity-0 duration-500 ease-out delay-[0.5s]'>
                                <div className='flex justify-around items-center'>
                                    <div className='w-[50px]'>
                                        <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='PS' src="/icons/ps.png" alt="ps" />
                                        <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>PS</h1>
                                    </div>
                                    <div className='w-[50px]'>
                                        <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='illustrator' src="/icons/ai.png" alt="illustrator" />
                                        <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>illustrator</h1>
                                    </div>
                                    <div className='w-[50px]'>
                                        <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='XD' src="/icons/xd.png" alt="xd" />
                                        <h1 className='font-fpop text-tsec text-xs mt-2 text-center -translate-x-1'>XD</h1>
                                    </div>
                                    <div className='w-[50px]'>
                                        <img className='w-[42px] h-[42px] object-contain mx-auto rounded-[8px] hover:ring-[2px] ring-offset-bg3 ring-tsec ring-offset-[3px]' title='Figma' src="/icons/figma.png" alt="figma" />
                                        <h1 className='font-fpop text-tsec text-xs mt-2 text-center'>Figma</h1>
                                    </div>
                                </div>
                                <div className='skillboxoverlay'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-32">
                <h1 className="title">Portfolio</h1>
                <h1 className="subtitle">WHAT I MADE <span className="text-accentblue">?</span></h1>
            </div>
        </section>
    </>
  )
})

export default Skill

