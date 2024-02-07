import { useState } from "react";

const ScrollTop = () => {
    
    const [isScroll,setIsScroll] = useState(false);

    window.addEventListener('scroll',() => {
        window.scrollY > 715 ? setIsScroll(true): setIsScroll(false);
    });

    return (
    <>
        <div className={isScroll ? "fixed right-3 bottom-20 sm:right-8 sm:bottom-8 w-fit z-20" : 'hidden'}>
            <button onClick={() => window.scrollTo(0,0)}><i className="bi bi-arrow-up text-2xl text-white bg-accentorange px-[10px] py-[6px] leading-3 rounded shadow border-t-[3px] border-yellow-300 hover:bg-secblue hover:border-cyan-300"></i></button>
        </div>
    </>
  )
}

export default ScrollTop