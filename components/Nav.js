import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Nav(){
    return(
        <div className="ml-4 mr-4">
               <ul className="space-x-4 menu">
                   <ul className="float-right space-x-3">
                       <li className="inline-block">
                           <Link href={'https://github.com/geraldthedev'} >
                           <FaGithub/>
                           </Link>
                       </li>
                       <li className="inline-block">
                           <Link  href={'https://www.linkedin.com/in/gerald-bryant-31b08925'}>
                        <FaLinkedinIn/>
                        </Link>
                       </li>

                   </ul>
               </ul>
               
               
        </div>
    )
}