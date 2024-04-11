import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    An integrated library system (ILS), also known as a library management system (LMS), is an enterprise resource planning system for a library, used to track items owned, orders made, bills paid, and patrons who have borrowed.<br/>
                        <br/>
                        .<br/>
                        <br/>
                        An ILS is usually made up of a relational database, software to interact with that database, and two graphical user interfaces (one for patrons, one for staff). Most ILSes separate software functions into discrete programs called modules, each of them integrated with a unified interface.<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
