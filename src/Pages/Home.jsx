import MobileNav from '../Components/MobileNav'
import Nav from '../Components/Nav'
import About from '../Sections/About'
import Contact from '../Sections/Contact'
import Portfolio from '../Sections/Portfolio'
import Projects from '../Sections/Projects'
import Skill from '../Sections/Skill'
import Welcome from '../Sections/Welcome'
import Footer from '../Sections/Footer'
import ScrollTop from '../Components/ScrollTop'
import { useEffect, useState } from 'react'
import BgMusic from '../Components/BgMusic'


const Home = () => {
  // ====================== spy scroll for navigation ============================ //
  let sections = document.querySelectorAll('section');
  let links = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll',() => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 58;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        links.forEach(link => {

          link.classList.remove('active');
          document.querySelectorAll('.nav-item[href*=' + id + ']')[0].classList.add('active');
          document.querySelectorAll('.nav-item[href*=' + id + ']')[1].classList.add('active');
        });
      }
    });
  });

  useEffect(() => {
    sections = document.querySelectorAll('section');
    links = document.querySelectorAll('.nav-item');
  });


  //===================== Animation On Scroll =======================//
  const observer = new IntersectionObserver((elements) => {
    elements.forEach((ele) => {
        if(ele.isIntersecting){
            ele.target.classList.add('myfade-in');
        }else{
            ele.target.classList.remove('myfade-in');
        }
    });
  });

  useEffect(() => {
    const ani_ele = document.querySelectorAll('.myanimation');
    ani_ele.forEach((el) => observer.observe(el));
  },[]);

  return (
    <div className='overflow-x-hidden'>
        <Nav />
        <MobileNav />
        <BgMusic />

        <Welcome />
        <About />
        <Skill />
        <Portfolio />
        <Projects />
        <Contact />
        <Footer />

        <ScrollTop />
    </div>
  )
}

export default Home