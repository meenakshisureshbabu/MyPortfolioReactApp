import React from 'react'
import contactdet from '../models/contact'

function ContactComponent() {
  return (
    <div>
        <p className='contactpara'>CONTACT</p>
        <p>Email ID : {contactdet.email}</p>
        <p>Phone : {contactdet.phone}</p>
    </div>
  )
}

export default ContactComponent