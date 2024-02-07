import { Link, useParams } from "react-router-dom"
import {Reacticon} from '../svgicons/Reacticon.jsx'
import {Vueicon} from '../svgicons/Vueicon.jsx'
import {Tailwindicon} from '../svgicons/Tailwindicon.jsx'
import { useEffect, useState } from "react"
import datas from '../Components/project_info.json'
import { Laravelicon } from "../svgicons/Laravelicon.jsx"

const ProjectDetail = () => {
  const {id} = useParams();
  const [imgModal,setImgModal] = useState(false);
  const [pdata,setPdata] = useState({});
  const [curImg,setCurImg] =useState(0);

  const prev = () => {
    if(curImg > 0){
      setCurImg(pre => pre - 1);
    }else{
      setCurImg(pdata.images.length - 1);
    }
  }

  const next = () => {
    if(curImg < pdata.images.length - 1){
      setCurImg(pre => pre + 1);
    }else{
      setCurImg(0);
    }
  }

  const getData = () => {
    const dd = datas.data.filter(val => val.id == id);
    setPdata(dd[0]);
  }

  const scrollTop = () => {
    window.scrollTo(0,0);
  }

  useEffect(() => {
    getData();
  },[id]);

  useEffect(() => {
    scrollTop();
  });

  return (
    <>
      <div className="w-full min-h-screen bg-bg4 bg-[url('/images/gradient_bg.png')] bg-cover relative z-10">

      {/* ================================================= ba  ck button ================================================ */}
        <div className="fixed w-full py-4 top-0 z-10 bg-gray-900/90 backdrop-blur-[2px]">
          <Link to={-1} className="ms-5 sm:ms-9 text-xl text-white px-[10px] py-1 rounded shadow bgbtn hover:opacity-80"><i className="bi bi-arrow-left"></i></Link>
        </div>

        <div className="w-[98%] lg:w-11/12 mx-auto flex justify-center items-center flex-wrap pt-24">
        
          {/* ================================================= pj img ================================================ */}
          <div className="w-full md:w-6/12 lg:w-[55%]">
            <div className="w-[98%] min-[400px]:w-[380px] sm:w-[460px] md:w-[355px] lg:w-[460px] xl:w-[550px] mx-auto relative">
              {/* --------------- pj img ------------- */}
              <div className="relative group">
                <img className="w-full mx-auto rounded border border-gray-500/20 scale-y-110" src={pdata.images && pdata.images[curImg]} alt="pjimg" />
                <div onClick={() => setImgModal(true)} className="hidden group-hover:flex absolute w-full h-full left-0 top-0 bg-slate-900/40 duration-300 justify-center items-center scale-y-110 cursor-pointer">
                  <i className="bi bi-arrows-angle-expand text-white text-3xl"></i>
                </div>
              </div>
              {/* --------------- img number desc  ------------- */}
              <div className="pjimgfooter w-[62%] h-[43px] md:h-[58px] bg-sky-800/90 absolute -z-[1] left-[1px] -bottom-[31px] md:-bottom-9 rounded">
                <h1 className="text-xs text-white font-finter translate-y-6 md:translate-y-[39px] ps-5">Image {curImg+1}/{pdata.images?.length}</h1>
              </div>
            </div>

            {/* --------------- navi imgs ------------- */}
            <div className="w-[98%] min-[400px]:w-[380px] sm:w-[460px] md:w-[355px] lg:w-[460px] xl:w-[550px] mx-auto flex justify-start items-center flex-wrap mt-14">
              {pdata.images?.map((val,index) => (
              <div key={index} className="w-[90px] mr-2 sm:mr-3 mb-3">
                <img onClick={() => setCurImg(index)} style={{opacity:curImg != index ? '0.68' : '1',outline:curImg != index ? '' : '3px solid #21a0d0'}} className="w-full rounded-[3px] cursor-pointer hover:-translate-y-[3px] duration-200 border border-gray-400/30 scale-y-110 brightness-110" src={val} alt="image" />
              </div>
              ))}
              
            </div>

            {/* --------------- pj language ------------- */}
            <div className="flex justify-evenly sm:justify-center pe-2 sm:pe-0 items-center mt-6 space-x-1 sm:space-x-5">
              <div className="flex justify-center items-center scale-[0.85]">
                <div className="text-tsec text-4xl mb-[1px]"><i className="bi bi-hourglass"></i></div>
                <div className="ms-1">
                  <h1 className="font-fpop text-tpri font-extralight leading-5">Duration</h1>
                  <h1 className="font-finter text-tsec text-sm font-medium">{pdata.duration}</h1>
                </div>
              </div>
              {pdata.laravel && (
                <h1 className="text-tsec font-fpop font-light text-xs sm:text-sm"><Laravelicon className="text-tsec text-[22px] inline me-1" />Laravel</h1>
              )}
              {pdata.react && (
                <h1 className="text-tsec font-fpop font-light text-xs sm:text-sm"><Reacticon className="text-tsec text-[22px] inline me-1" />React Js</h1>
              )}
              {pdata.vue && (
                <h1 className="text-tsec font-fpop font-light text-xs sm:text-sm"><Vueicon className="text-tsec text-[22px] inline me-1" />Vue Js</h1>
              )}
              {pdata.tailwind && (
                <h1 className="text-tsec font-fpop font-light text-xs sm:text-sm"><Tailwindicon className="text-tsec text-[22px] inline me-1" />Tailwind</h1>
              )}
            </div>
            
          </div>

          {/* ================================================= project info texts ================================================ */}
          <div className="w-full md:w-6/12 lg:w-[45%] ps-4 pe-2 sm:ps-8 py-16 md:py-8 self-start">
            <div className="w-full sm:w-[490px] md:w-[98%] mx-auto">
              <div className="relative">
                <h1 className="text-tsec font-finter font-bold text-2xl">{pdata.title}</h1> 
                <div className="absolute top-[4px] -left-3 w-[3px] h-[75%] bg-accentblue"></div>
              </div>
              <h1 className="font-fsora text-tmute text-sm tracking-wider font-extralight mb-3">{pdata.subtitle}</h1>
              <h1 className="font-finter text-tsec text-[15px] font-light">{pdata.paragraph}</h1>
              <div className="mt-12 sm:mt-9">
                <div className="relative w-fit">
                  <h1 className="font-finter text-tsec text-xl font-medium">Project Features</h1>
                  <div className="absolute left-0 -bottom-[6px] w-full h-[2px] bg-accentblue"></div>
                </div>
                <ul className="mt-5 ps-7">
                  {pdata.features?.map((val,index) => (
                    <li key={index} className="font-fpop text-sm mb-2 font-light text-tsec list-disc">{val}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* --------------- pj buttons ------------- */}
            <div className="flex justify-start items-center space-x-5 sm:space-x-8 mt-12">
              <a href={pdata.code_link} target="_blank" className="bg-[#0a0f13] text-[#e6edf3] px-3 sm:px-6 pt-[8px] pb-[7px] border-y border-[#30363d] rounded-sm text-[15px] hover:bg-[#13171c] shadow-lg shadow-slate-600/10"><i className="bi bi-github me-3"></i>View Code</a>
              {pdata.demo_link && (
                <a href={pdata.demo_link} target="_blank" className="bgbtn text-white px-3 sm:px-6 pt-[7px] pb-[6px] border-t-2 border-cyan-400/60 rounded-sm shadow hover:opacity-80 text-[15px]"><i className="bi bi-eye-fill me-3"></i>View Demo</a>
              )}
            </div>
          </div>

        </div>

      {/* ================================================= img modal ================================================ */}
      {imgModal &&
        <div className="fixed top-0 left-0 w-full h-screen bg-slate-900/80 z-40 backdrop-blur-sm">
          <div className="text-end">
            <button onClick={() => setImgModal(false)} className="mt-3 me-4 text-tsec hover:text-accentblue text-3xl md:text-4xl"><i className="bi bi-x-lg"></i></button>
          </div>
          <div className="relative w-[97%] sm:w-[95%] lg:w-[86%] min-h-screen mx-auto flex justify-center items-center xl:items-start">
            <img className="w-full object-cover rounded" src={pdata.images && pdata.images[curImg]} alt="image" />
            <button onClick={() => prev()} className="absolute top-[47%] xl:top-[38%] left-0 text-white bg-secblue text-2xl md:text-4xl hover:bg-accentorange opacity-70 hover:opacity-100 border border-white/60 rounded-full px-[5px] py-[3px] scale-[0.83] md:scale-100"><i className="bi bi-chevron-left"></i></button>
            <button onClick={() => next()} className="absolute top-[47%] xl:top-[38%] right-0 text-white bg-secblue text-2xl md:text-4xl hover:bg-accentorange opacity-70 hover:opacity-100 border border-white/60 rounded-full px-[5px] py-[3px] scale-[0.83] md:scale-100"><i className="bi bi-chevron-right"></i></button>
          </div>
        </div>
      }
        
      </div>
    </>
  )
}

export default ProjectDetail