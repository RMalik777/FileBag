import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)} ><img src='./x.png' width={'20px'}></img></button>
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