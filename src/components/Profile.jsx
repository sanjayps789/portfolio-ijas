import React from 'react';
import { Button } from 'react-bootstrap';
import image from '../assets/profile.png';

function Profile() {
  return (
    <div
      id="home"
      style={{
        height: '100vh', // Ensures full height of the screen
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="w-100"
    >
      <div style={{ width: '90%' }} className="container">
        <div className="row d-flex align-items-center justify-content-center w-100">
          {/* Image Section */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center order-1 order-lg-2">
            <img
              style={{ width: '100%' }}
              className="img-fluid profileImg rounded-circle"
              src={image}
              alt="profile"
            />
          </div>

          {/* Text Section */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center flex-column order-2 order-lg-1">
            <div className='pt-lg-0 pt-5'>
              <h1 style={{ fontSize: '45px' }} className="text-white fw-bold">
                I'm <span className="text-white ms-4">IJAS PI</span>
              </h1>
              <h3 className="text-white py-2">Graphic Designer</h3>
              <div className="d-flex justify-content-start align-items-center">
                <Button
                  style={{ backgroundColor: 'white' }}
                  target="_blank"
                  href="https://drive.google.com/file/d/10OXCZ3SOBXpvFppwj8vw1Io2VQT90Hy5/view?usp=sharing"
                  variant="dark"
                  className="rounded-3 px-3 py-2 fw-medium text-black"
                >
                  Download CV
                </Button>
                <i className="fa-brands text-white fa-github fs-1 ps-lg-5 ps-3"></i>
                <i className="fa-brands text-white fa-linkedin fs-1 ps-lg-5 ps-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
