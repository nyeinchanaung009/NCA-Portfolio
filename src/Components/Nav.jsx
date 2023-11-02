import { memo, useState } from "react";

const Nav = memo(() => {
    const [scrolldown,setScrollDown] = useState(false);
    const [lastscroll,setLastscroll] = useState();
    const [navblur,setNavblur] = useState(false);

    window.addEventListener('scroll', () => {
        const currentscroll = window.scrollY;
        if(currentscroll <= 0){
            setScrollDown(false);
        }
        if(currentscroll > lastscroll){
            setScrollDown(true);
        }
        if(currentscroll < lastscroll){
            setScrollDown(false);
        }
        setLastscroll(currentscroll);
    });

    window.addEventListener('scroll',() => {
        window.scrollY > 715 ? setNavblur(true): setNavblur(false);
    });

  return (
    <>
        <div style={{transform:scrolldown ? 'translateY(-100%)' : 'translateY(0%)'}} className={navblur ? 'navvblur' : 'navv'}>
            <div className="sm:w-[95%] md:w-[88%] mx-auto flex justify-between items-center py-[7px] md:px-2 lg:px-3">
                <a href="/" className="hover:scale-95 duration-150 dshadow">
                    <img className="w-[40px] md:w-[50px]" src="./icons/logo.png" alt="logo" />
                </a>
                <div className="">
                    <a className="navlink nav-item relative text-tpri hover:text-accentblue font-fsora font-light drop-shadow-sm text-sm px-4 lg:px-6 active" href="#welcome">Welcome</a>
                    <a className="navlink nav-item relative text-tpri hover:text-accentblue font-fsora font-light drop-shadow-sm text-sm px-4 lg:px-6" href="#about">About</a>
                    <a className="navlink nav-item relative text-tpri hover:text-accentblue font-fsora font-light drop-shadow-sm text-sm px-4 lg:px-6" href="#skill">Skill</a>
                    <a className="navlink nav-item relative text-tpri hover:text-accentblue font-fsora font-light drop-shadow-sm text-sm px-4 lg:px-6" href="#portfolio">Portfolio</a>
                    <a className="navlink nav-item relative text-tpri hover:text-accentblue font-fsora font-light drop-shadow-sm text-sm px-4 lg:px-6" href="#projects">Projects</a>
                    <a className="navlink nav-item relative text-tpri hover:text-accentblue font-fsora font-light drop-shadow-sm text-sm px-4 lg:px-6" href="#contact">Contact</a>
                </div>
            </div>
        </div>
    </>
  )
})

export default Nav