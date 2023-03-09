import { Component } from "react";
import React from 'react'
import jwt from 'jsonwebtoken'
import token from '../netlify/functions/auth'




const Contact=()=>{

    return(
        <div className="grid justify-center">
            <div className="grid rounded-md bg-white conform  ">
                
                <form className="grid w-10/12 place-self-center" action='/hello' method='POST'>

                <div className="grid col-span-2 items-center border-b py-2"> 
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
                <input className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" placeholder="Name"  name="first_name"></input>
                
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label><input className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" placeholder="Name" name="last_name"></input>
                </div>

                <div className="flex items-center border-b py-2"><label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
        E-Mail
      </label><input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="E-Mail" type="email" name="email"></input></div>

                <div className="flex items-center border-b py-2"><label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
        Number
      </label><input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Phone Number" type="tel" name="number"></input></div>

                <div className="flex items-center border-b py-2"><label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-website">
        Website
      </label><input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Website" type="url" name="website"></input></div>
               
                <div className="grid">
                    <button className=" bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow place-self-center ">Contact</button>
                    </div>
                
                
                </form>
               
    <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=1306b1ac-e38d-438a-b51d-392ff6eda9f0"> </script>
  
    {
      zE("messenger", "loginUser", (callback)=>{
       try {
        callback(token)
        console.log('user authenticated')
       } catch (error) {
        console.log(error)
       }
        
      })
    }
            
            </div>
        </div>
    )
      
}
module.exports= Contact
