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
      <div className='container w-screen '>
        <section className='bg-white  rounded-b w-screen h-96'>
          <Nav />
          <div className='float-right bg-gray-700 rounded-l-md intro'>
            <div className= 'justify-self-auto m-20 text-3xl name '>
            Gerald Bryant | Full Stack Developer
            </div>
          
          </div>

        </section>
        <section className='w-screen h-96  flex items-center'>
        
        <Projects />

        </section>
        <section className='w-screen h-96 bg-gray-800 '>
          <div className=' grid justify-items-stretch'>
          <Contact />
          </div>
        

        </section>
        
      </div>
    
    </div>
  )
}
