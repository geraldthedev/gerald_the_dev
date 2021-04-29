import { Component } from "react";
import React from 'react'


const Contact=()=>{

    
    return(
        <div className="grid justify-center">
            <div className="grid rounded-md bg-white conform  ">
                
                <form className="grid w-10/12 place-self-center ">

                <div className="grid col-span-2 items-center border-b py-2"> 
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
                <input className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" placeholder="Name" type="text"></input>
                
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label><input className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" placeholder="Name" type="text"></input>
                </div>

                <div className="flex items-center border-b py-2"><label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
        E-Mail
      </label><input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="E-Mail" type="email"></input></div>

                <div className="flex items-center border-b py-2"><label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
        Number
      </label><input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Phone Number" type="tel"></input></div>

                <div className="flex items-center border-b py-2"><label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-website">
        Website
      </label><input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Website" type="url"></input></div>
               
                <div className="grid">
                    <button className=" bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow place-self-center ">Contact</button>
                    </div>
                
                
                </form>
               
            </div>
        </div>
    )
}
module.exports= Contact