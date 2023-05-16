import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import './contact.css'

const EmailSent = () => {
    return (
        <div className='email-sent'>
            <FaCheckCircle className='sent-icon'/>
            <p>Email terkirim!</p>
        </div>
    )
}

export default EmailSent