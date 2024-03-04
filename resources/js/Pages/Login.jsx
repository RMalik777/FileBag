import React, { useState, useEffect } from 'react';
import Poto from '../../../public/assets/Poto.png';
import Poto1 from '../../../public/assets/Poto1.png';
import Poto2 from '../../../public/assets/Poto2.png';
import filexCIMB from '../../../public/assets/filexCIMB.png';

const Login = () => {
  const photos = [Poto, Poto1, Poto2];
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [photos.length]);

  return (
    <div className="flex max-lg:justify-center max-lg:items-center h-screen bg-cover max-lg:bg-[image:var(--image-url)]" style={{ "--image-url": `url(${photos[selectedPhotoIndex]})` }}>
      <div className="hidden lg:block lg:flex-[45%] bg-cover bg-center  transition-all duration-1000 lg:bg-[image:var(--image-url)]" style={{ "--image-url": `url(${photos[selectedPhotoIndex]})` }}>
        <div className="flex flex-col items-center backdrop-brightness-50 justify-center h-full">
          <img src={filexCIMB} alt="Company Logo" className="hidden lg:block w-[380px] mb-4 justify-center" />
          <h2 className='hidden lg:block text-white text-[18px] justify-center'>Your Number 1 File Management System</h2>
        </div>
      </div>
      <div className="flex lg:flex-[55%] h-auto lg:h-full max-lg:rounded-md items-center justify-center bg-cimbred">
        <div className="w-full max-w-md p-8">
          <h2 className="text-white font-semibold text-3xl mb-8 text-center">Login Page</h2>
          <img src={filexCIMB} alt="Company Logo" className="w-[300px] mb-8 mx-auto" />
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="text-white block">Username</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-white block">Password</label>
              <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-lg p-2" />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="rememberMe" name="rememberMe" className="rounded-full cursor-pointer mr-2" />
              <label htmlFor="rememberMe" className="text-white">Remember me</label>
            </div>
            <button type="submit" className="w-full bg-white text-black font-bold py-2 rounded-lg hover:bg-red-900">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;