/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const ContactPageContent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm('LaptelEmailService', 'template_3z3oo9k', form.current, '_Z-FGyvQULfdDSyvC')
            .then((result) => {
                document.getElementById('myform').reset();
                alert("!!! Your feedback is recorded !!!");
            });
    };

    return (
        <div className="ContactContainer flex flex-col space-y-4 md:space-y-0 md:flex-row">
            <div className="ContactText flex flex-col text-white space-y-2 md:space-y-4">
                <div className="text-2xl md:text-5xl"> We'd love to hear from <span className="text-pink-400 font-bold">YOU!</span> </div>
                <div className="md:text-1xl">
                    Reach us anytime Monday - Friday from 0900-1800 IST <br /> +91 8412073758 | +91 7822670856
                </div>
            </div>

            <div className="ContactForm flex justify-center">
                <form id="myform" className="flex flex-col justify-center items-center rounded-3xl p-5 space-y-2 md:space-y-8 md:p-12" ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col justify-center md:justify-start ">
                        <label className="py-1" htmlFor="email">.email( )</label>
                        <input className="w-11/12 md:p-2 md:w-full" type="email" name="user_email" id="Inputemail" required />

                        <label className="py-1 mt-2 md:mt-3" htmlFor="name">.name( )</label>
                        <input className="w-11/12 md:p-2 md:w-full" type="text" name="user_name" id="Inputname" required />

                        <label className="py-1 mt-2 md:mt-3" htmlFor="message">.your_message( )</label>
                        <input className="w-11/12 md:p-2 md:w-full" type="text" name="user_message" id="Inputmessage" required />
                    </div>
                    <input className="Contactbtn py-1 cursor-pointer" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default ContactPageContent
