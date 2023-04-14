import Head from 'next/head'
import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import React from 'react'
import Typed from 'typed.js'
import {useEffect} from 'react'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Auth from '../netlify/functions/auth'
import Link from 'next/link'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";





export default class Home extends React.Component {
          constructor(props){
              super(props);
              this.state={

              }
             
              
          
          }

          
          componentDidMount(){

            const options ={
              strings: ['^1000Hi!<br>^1000 I\'m Gerald.<br>^1000A Web Developer.'],
              typespeed:0,
              showCursor: false,
            }
        
           this.typed = new Typed(this.el, options);

           {!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="rQ7N5mm8IGX0Ht3EwER9EDGwl2GAcDlA";;analytics.SNIPPET_VERSION="4.15.3";
           analytics.load("rQ7N5mm8IGX0Ht3EwER9EDGwl2GAcDlA");
           analytics.page();
           }}()}
           
          
           /*const container = document.getElementById("page")  
           let script = document.createElement("script")
            script.src ="https://static.zdassets.com/ekr/snippet.js?key=1306b1ac-e38d-438a-b51d-392ff6eda9f0"
            script.async =true
           container.appendChild(script)*/

         /* {
            zE("messenger", "loginUser", (callback)=>{
              try {
               callback()
               console.log('user authenticated')
              } catch (error) {
               console.log(error)
              }
               
             })
          }*/

          
          
         
           }
          
        
    
 

 render(){

  let key = process.env.widget_key
  const firebaseConfig = {
    apiKey: process.env.fire_api_key,
    authDomain: process.env.fire_auth_domain,
    projectId: process.env.fire_project_id,
    storageBucket: process.env.fire_storage_bucket,
    messagingSenderId: process.env.messaging_sender_id,
    appId: process.env.fire_app_id,
    measurementId: process.env.fire_measurement_id
  };

 
  //const app =  initializeApp(firebaseConfig);
  //const analytics =  getAnalytics(app);
  //const perf = getPerformance(app);

  return (
    <div className='container w-screen'>
      <Head>

        
        <title>Gerald the Dev</title>

        

        {/*<Script strategy="beforeInteractive">
            {
              Smooch.init({
                integrationId: 'app_640103275400b0011ab26d96',
                embedded: true
              }).then(()=>{
                let user = Smooch.getUser()
              }).then(()=>{
                Smooch.render(document.getElementById('widget'))
              })
    
            
            }
          </Script>*/}
        
      </Head>
      <div id='page' className='container w-auto'>
        <div className='bg-white rounded-b w-screen h-96 intro '>
          <div>
          <Nav />
          </div>
         <div className='box-content object-center ml-8 meet'>
          <span className='xl:text-8xl lg:text-8xl sm:text-8xl md:text-7xl hello' ref={(el)=>{this.el = el}}>
            </span>
         </div>
          
          <>
          <Script async id='ze-snippet' src ={`https://static.zdassets.com/ekr/snippet.js?key=${key}`}
          
         await onLoad={()=>{
            console.log('Script has loaded')

                try { 
                  zE('messenger', 'loginUser',(callback)=>{
                    const jwt = Auth()
                    callback(jwt)
                    
                    
                  })
                 
                } catch (error) {
                 console.log(error)
                }
            
              
               
             

            
          }}/>
          
          
        
          </>
        </div>
        <div className='grid w-screen h-96 items-center justify-items-center overflow-x-hidden'>
        
        <Projects />
        </div>
        <div className='grid w-screen h-96 bg-gray-800 items-center '>
          <div className=' grid justify-items-stretch'>
          <Contact />

          
          </div>
        
         
        </div>
        
      </div>
    </div>
  )


 }
  
}

