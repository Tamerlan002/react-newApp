import React from 'react'
import Title from "../../components/titles/Title";
import './style.scss'


 const Maintenance = () => {
  return (
    <div className='maintenance'>
        <div className='container d-flex justify-content-center'>
            <div className='maintenance-section'>
                <div className='title'>
                    <Title text='Oops!'/>
                    <p>This page is currently down for maintenance.</p>
                </div>
                <div className='image'>
                    <img className='w-100' src='/images/Illustration.png' alt=''/>
                    <img className='w-100' src='/images/Illustration-2.png' alt=''/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Maintenance;