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
        
           this.typed = new Typed(this.el, options)

           } 
    
 

 render(){

  return (
    <div className='container w-screen'>
      <Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FK9WCBB2G4"></script>
<script>
 { window.dataLayer = window.dataLayer || [],
  function gtag(){{dataLayer.push(arguments)}},
  gtag('js', new Date()),

  gtag('config', 'G-FK9WCBB2G4')}
</script>
        
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
          </div>
        

        </div>
        
      </div>
    
    </div>
  )


 }
  
}

