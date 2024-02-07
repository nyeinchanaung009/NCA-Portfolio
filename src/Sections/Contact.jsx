import {Vibericon} from '../svgicons/Vibericon.jsx'
import {Message} from '../svgicons/Message.jsx'
import { memo, useRef, useState } from 'react'

const Contact = memo(() => {
  const nameRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();

  const [success,setSuccess] = useState(false);
  const [fail,setFail] = useState(false);
  const [alert,setAlert] = useState(false);

  const Send = (e) => {
    e.preventDefault();

    if(nameRef.current.value === '' || emailRef.current.value === '' || titleRef.current.value === '' || messageRef.current.value === ''){
      setAlert(true);
      setTimeout(() => {  
        setAlert(false);
      },4500);
    }else{
      emailjs.sendForm('service_zqza8ld','template_gk9yvnj','#contact_form','qKsGyYOmD_05pKFlo')
        .then(() => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          },4500);
        },(error) => {
          setFail(true);
          setTimeout(() => {
            setFail(false);
          },4500);
        });

      nameRef.current.value = '';
      emailRef.current.value = '';
      titleRef.current.value = '';
      messageRef.current.value = '';
    }
  }

  return (
    <>
        {/* =========================================================== contact setion ================================================== */}
        <section id="contact" className="bg-bg4 bg-[url('/images/gradient_bg.png')] bg-cover">
            <div className="w-11/12 md:w-[97%] lg:w-11/12 xl:w-10/12 mx-auto sm:min-h-[85vh]lg:min-h-[93vh] pt-12 pb-24 lg:pb-32">

                <div className="">
                    <h1 className="title">Contact</h1>
                    <h1 className="subtitle">GET IN TOUCH</h1>
                </div>

                <div className='flex justify-center items-center flex-wrap mt-12'>
                  <div className="w-full md:w-6/12 lg:w-5/12 myanimation opacity-0 -translate-y-6 duration-700 delay-[0.5s] ease-out">
                    <div className="w-[97%] min-[410px]:w-[340px] md:w-[320px] lg:w-[355px] mx-auto bg-bg3 rounded-xl relative z-20 shadow border border-slate-700/40 p-1 py-7 sm:px-3 sm:py-10">
                      
                      <div className="flex justify-start items-center mb-8">
                        <i className="bi bi-telephone-fill text-tpri text-[24px] ms-4 me-7" src="/icons/telephone.svg"></i>
                        <div>
                          <h1 className="text-accentblue text-lg font-fpop font-light leading-5">Call Me</h1>
                          <a href="tel:09781652272"  className="font-fsora font-medium text-tmute text-[13px] hover:text-tpri underline underline-offset-2 udcolor">09 781652272</a>
                        </div>
                      </div>

                      <div className="flex justify-start items-center mb-8">
                        <i className="bi bi-envelope-fill text-tpri text-[24px] ms-4 me-7" src="/icons/telephone.svg"></i>
                        <div>
                          <h1 className="text-accentblue text-lg font-fpop font-light leading-5">Email</h1>
                          <a href="mailto:nchanaung683@gmail.com"  className="font-fsora font-medium text-tmute text-[13px] hover:text-tpri underline underline-offset-2 udcolor">nchanaung683@gmail.com</a>
                        </div>
                      </div>

                      <div className="flex justify-start items-center mb-8">
                        <i className="bi bi-geo-alt-fill text-tpri text-[24px] ms-4 me-7" src="/icons/telephone.svg"></i>
                        <div>
                          <h1 className="text-accentblue text-lg font-fpop font-light leading-8">Location</h1>
                          <address className="not-italic font-fsora font-medium text-tmute text-[12.5px]">
                            No.484, Lower Pazundaung St, Pazundaung Tsp, Yangon.
                          </address>
                        </div>
                      </div>

                      <div className="flex justify-center items-center space-x-6 pt-12">
                        <a target="_blank" href="https://www.facebook.com/nyeinchanaung31817" title='Facebook' className="text-xl text-tmute hover:text-tsec hover:scale-[1.2]"><i className="bi bi-facebook"></i></a>
                        <a target="_blank" href="https://m.me/nyeinchanaung31817" title='Messenger' className="text-xl text-tmute hover:text-tsec hover:scale-[1.2]"><i className="bi bi-messenger"></i></a>
                        <a target="_blank" href="viber://chat/?number=%2B959781652272" title='Viber' className="text-xl text-tmute hover:text-tsec hover:scale-[1.2]"><Vibericon /></a>
                        <a target="_blank" href="https://github.com/nyeinchanaung009" title='Github' className="text-xl text-tmute hover:text-tsec hover:scale-[1.2]"><i className="bi bi-github"></i></a>
                      </div>

                      <h1 className='font-fsora text-[45px] font-black text-[#1a253231] -rotate-90 absolute bottom-40 -right-[165px] -z-[1]'>CONTACT <span className='ms-2'> NOW</span></h1>
                      <div className='absolute -right-[15px] top-[20px] w-[15px] h-[76px] bg-secblue rounded-r-md shadow z-10'></div>
                      <div className='absolute -right-[10px] top-[67px] w-[10px] h-[76px] bg-[#2d4264] rounded-r-md shadow'></div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-7/12 mt-14 md:mt-0">
                    <div className="w-[96%] min-[430px]:w-[80%] min-[500px]:w-[384px] md:w-[360px] lg:w-[460px] xl:w-[520px] mx-auto md:mx-0 lg:mx-auto">
                      <h1 className="text-tpri font-light font-fsora mb-2"><i className="bi bi-envelope-fill me-2"></i>Send Message</h1>
                      <form onSubmit={Send} id='contact_form'>
                        <div className='md:flex justify-center items-center md:space-x-3'>
                          <input ref={nameRef} name="user_name" placeholder='Your Name' type="text" className='contactinput1 backdrop-blur-sm w-full bg-blurbg2 inputborder text-sm rounded-[4px] outline-none ring-[1px] ring-transparent focus:ring-accentblue shadow px-3 lg:px-4 py-[11px] text-tpri placeholder:text-tmute font-light mb-3 myanimation opacity-0 -translate-y-4 ease-out' />
                          <input ref={emailRef} name="user_email" placeholder='Your Email' type="email" className='contactinput2 backdrop-blur-sm w-full bg-blurbg2 inputborder text-sm rounded-[4px] outline-none ring-[1px] ring-transparent focus:ring-accentblue shadow px-3 lg:px-4 py-[11px] text-tpri placeholder:text-tmute font-light mb-3 myanimation opacity-0 -translate-y-4 ease-out' />
                        </div>
                        <input ref={titleRef} name="subject" placeholder='Title' type="text" className='contactinput3 backdrop-blur-sm w-full bg-blurbg2 inputborder text-sm rounded-[4px] outline-none ring-[1px] ring-transparent focus:ring-accentblue shadow px-3 lg:px-4 py-[11px] text-tpri placeholder:text-tmute font-light mb-3 myanimation opacity-0 -translate-y-4 ease-out' />
                        <textarea name="message" ref={messageRef} className='contactinput4 backdrop-blur-sm w-full bg-blurbg2 inputborder rounded-[4px] outline-none ring-[1px] ring-transparent focus:ring-accentblue shadow px-3 lg:px-4 py-[11px] text-tpri placeholder:text-tmute font-light mb-3 myanimation opacity-0 -translate-y-4 ease-out' cols="55" rows="8" placeholder='Message'></textarea>
                        <button type='submit' className='mybtn w-full myanimation opacity-0 -translate-y-5 duration-700 delay-[1.5s] ease-out'><span className='inline-block py-[2px]'>Send Message</span><Message className="inline text-white text-lg ms-2" /></button>
                        <h1 style={{display:success ? 'block' : 'none'}} className='font-fpop font-extralight text-tpri text-sm mt-3'><i className="bi bi-check-circle text-green-400 me-2"></i>Email Send Successful.</h1>
                        <h1 style={{display:fail ? 'block' : 'none'}} className='font-fpop font-extralight tracking-wide text-tpri text-sm mt-3'><i className="bi bi-exclamation-circle text-red-400 me-2"></i>OOPS! Fail to send Message.</h1>
                        <h1 style={{display:alert ? 'block' : 'none'}} className='font-fpop font-extralight tracking-wide text-tpri text-sm mt-3'><i className="bi bi-exclamation-circle text-red-400 me-2"></i>Please fill all the form fields.</h1>
                      </form>
                    </div>
                  </div>
                </div>

            </div>
        </section> 
    </>
  )
})

export default Contact