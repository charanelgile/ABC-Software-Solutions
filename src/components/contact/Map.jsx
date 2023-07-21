import React from 'react'
function Map() {

  return (
    <div className='Map'>
         <iframe title='Map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.63181920161!2d123.89314209999998!3d10.291220300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99bfbb9f4145b%3A0x81c93384dae66161!2s24%20R.%20Magsaysay%20St%2C%20Cebu%20City%2C%206000%20Cebu!5e0!3m2!1sen!2sph!4v1689875229084!5m2!1sen!2sph" 
        width="600" 
        height="450" 
        style={{border: "0" }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}
export default Map
