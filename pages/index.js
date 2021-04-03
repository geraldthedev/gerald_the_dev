import Head from 'next/head'
import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Projects from '../components/Projects'




export default function Home() {
  return (
    <div className='container w-screen'>
      <Head>
        
        
        <title>Gerald the Dev</title>
        
      </Head>
      <div className='container w-screen'>
        <section className='bg-white rounded-b w-screen h-96 intro '>
          <div className='container w-screen'>
          <Nav />
          </div>
         <div className='box-content object-center ml-8'>
         <p className='text-8xl'>Hi! I'm Gerald. A web developer.</p>
         </div>
          
          

        </section>
        <section className='grid w-screen h-96 items-center justify-items-center overflow-x-hidden'>
        
        <Projects />

        </section>
        <section className='grid w-screen h-96 bg-gray-800 items-center '>
          <div className=' grid justify-items-stretch'>
          <Contact />
          </div>
        

        </section>
        
      </div>
    
    </div>
  )
}
