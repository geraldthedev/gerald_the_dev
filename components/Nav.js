import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Nav(){
    return(
        <div className="p-4 ">
               <ul className="space-x-4 menu">
                   <ul className="float-right space-x-3">
                       <li className="inline-block">
                           <a href='https://github.com/geraldthedev'>
                           <FaGithub/>
                           </a>
                           
                           
                       </li>
                       <li className="inline-block">
                           <a  href={'https://www.linkedin.com/in/gerald-bryant-31b08925'}>
                        <FaLinkedinIn/>
                        </a>
                       </li>

                   </ul>
               </ul>
               
               
        </div>
    )
}