import React, { memo, useEffect, useState } from 'react'

const BgMusic = memo(() => {
    const [music] = useState(new Audio('/media/bg-music.mp3'));
    const [isplay,setIsplay] = useState(false);


    const toggleMusic = () => {
        if(isplay){
            music.currentTime = 0;
            music.pause();
        }else{
            music.loop = true;
            music.volume = 0.35;
            music.play();
        }
        setIsplay(pre => !pre);
    }

    useEffect(() => {
        return () => {
            setIsplay(false);
            music.currentTime = 0;
            music.pause();
        }
    },[]);

  return (
    <>
        {/* ====================================================== background music ========================================= */}
        <div title='Background Music' className='fixed left-0 top-[15%] z-30 bg-bg4 rounded-r-md ps-[5px] pe-[2px] py-[3px] border border-slate-600/40 cursor-pointer -translate-x-10 hover:-translate-x-[4px] duration-300 ease-out opacity-90 hover:opacity-100 scale-90'>
            <div className='flex justify-center items-center px-1'>
                <div className='px-[2px] me-[5px]'>
                    <button onClick={toggleMusic} className='text-tpri border-2 border-white/50 rounded-full p-[3px] leading-3 hover:bg-secblue'><i className={isplay ? "bi bi-pause translate-x-[0.5px] inline-block" : "bi bi-play translate-x-[0.5px] inline-block"}></i></button>
                </div>
                <div className='relative w-[22px]'>
                    <img className='w-full' src="/icons/music_wave.gif" alt="music wave" />
                    {!isplay && (
                        <div className='absolute bottom-[7px] left-0 w-full h-[70%] bg-bg3'></div>
                    )}
                </div>
            </div>
        </div>
    </>
  )
})

export default BgMusic