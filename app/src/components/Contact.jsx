import React from "react";
import message from '../img/message.png'


const Contact = () => {
    return (
        <section className="flex justify-center  text-center mt-44 mb-32">
            <div className="space-y-8">
                <p className="subpixel-antialiased">What's Up?</p>
                <h3 className="subpixel-antialiased text-2xl">Get In Touch</h3>

                <p className="text-gray-500">
                    Although I’m not currently looking for any new  <br />opportunities, my inbox is always open. Whether you have a <br />question or just want to say hi, I’ll try my best to get back <br />to you!
                </p>
                <p className="text-center flex justify-center">
                    <button className="flex justify-center text-white bg-black rounded-xl py-2 px-8 ">
                        <a href="mailto:pfzsaul@gmail.com" className="flex justify-center space-x-3">
                            <p>Say Hello</p>
                            <img src={message} className="w-7 h-7"></img>
                        </a>
                    </button>
                </p>
            </div>
        </section>
    )
}


export default Contact