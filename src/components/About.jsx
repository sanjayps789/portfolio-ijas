import React from 'react'
import Loader1 from './Loader1'

function About() {
    return (
        <div id='about' style={{ height: '90vh' }} className='bg-black d-flex align-items-center justify-content-center w-100'>

            <div style={{width:'90%'}} className='container'>
                <h1 className='text-white text-center fw-bold py-3'>About Me</h1>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-4 pt-5 pt-lg-0 mt-5 mt-lg-0">
                       <div className='d-flex align-items-center justify-content-center'> <Loader1/></div>
                    </div>
                    <div className="col-lg-6">
                    <p style={{textAlign:'justify', fontSize:'17px',lineHeight:'2',width:'90%'}} className='text-white text-start w-100'>Hello! I'm Ijas P I, a passionate and creative graphic designer with expertise in web design, logo design, branding, and logo animation. Proficient in WordPress website design, creating responsive and visually engaging websites. Experienced in motion graphics, bringing dynamic elements to digital content. Adept at delivering impactful and innovative design solutions that elevate brand identities. Strong understanding of design principles, with a focus on delivering high-quality, user-centered designs.</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default About