import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center'>
        <div className='relative flex justify-center items-center flex-col p-8 w-full h-96 max-w-screen-md bg-white text-center rounded-lg'>
            <button className='absolute top-4 right-4 bg-transparent border-none' onClick={() => props.setTrigger(false)} ><img src='./x.png' width={'20px'}></img></button>
            {props.status ? (
            <>
              <img src='./AcceptedSize.png' className='size-img'></img>
              <h3>File Successfully Uploaded!</h3>
            </>
            ) : (
            <>
              <img src='./DeclinedSize.png' className='size-img'></img>
              <h3>Invalid Credentials!</h3>
              <p>file size must be below 3Mb & in .pdf format</p>
            </>
            )}
        </div>
    </div>
  ) : "";
}

export default Popup