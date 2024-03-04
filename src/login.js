import './login.css';
import React, { useState, useEffect } from 'react';
import Poto from './aset/Poto.svg';
import Poto1 from './aset/Poto1.svg';
import Poto2 from './aset/Poto2.svg';
import filexCIMB from './aset/filexCIMB.png'

const Login = () => {
        const photos = [Poto, Poto1, Poto2];
        const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
      
        useEffect(() => {
          // Start an interval to automatically change the photo every 3 seconds
          const intervalId = setInterval(() => {
            setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
          }, 3000);
      
          // Clean up the interval on component unmount
          return () => clearInterval(intervalId);
        }, [photos.length]);
        
        return(
        <div className='container'>
        <div className='image-side' style={{ backgroundImage: `url(${Poto})` }}>
            <div className='CenterPicture'>
            <img src={filexCIMB} className='fileXCIMB'/>
            </div>
        </div>
        <div className='form-side'>
          <h2>Login Page</h2>
          <img src={filexCIMB} className='fileXCIMB'/>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Username</label>
              <input type='text' id='name' name='name' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' />
            </div>
            <div className='form-group remember-me'>
                <input type='checkbox' id='rememberMe' name='rememberMe' />
                <label htmlFor='rememberMe'>Remember me</label>
            </div>
            <button type='submit'><strong>Login</strong></button>

          </form>
        </div>
      </div>
  
    )
};

export default Login;