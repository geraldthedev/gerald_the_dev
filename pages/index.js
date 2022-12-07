import Head from 'next/head'
import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import React from 'react'
import Typed from 'typed.js'




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

           } 
    
 

 render(){

  return (
    <div className='container w-screen'>
      <Head>

        
        <title>Gerald the Dev</title>
        
      </Head>
      <div className='container w-auto'>
        <div className='bg-white rounded-b w-screen h-96 intro '>
          <div>
          <Nav />
          </div>
         <div className='box-content object-center ml-8 meet'>
          <span className='xl:text-8xl lg:text-8xl sm:text-8xl md:text-7xl hello' ref={(el)=>{this.el = el}}>
            </span>
         </div>
          

        </div>
        <div className='grid w-screen h-96 items-center justify-items-center overflow-x-hidden'>
        
        <Projects />

        </div>
        <div className='grid w-screen h-96 bg-gray-800 items-center '>
          <div className=' grid justify-items-stretch'>
          <Contact />
                    <iframe width="250" height="50" style="border: 0" src="https://cdn.smooch.io/message-us/index.html?channel=messenger&color=blue&size=standard&radius=4px&label=Message us on Messenger&pageId=109386767590997"></iframe>

          </div>
        
         
        </div>
        
      </div>
    
    </div>
  )


 }
  
}

