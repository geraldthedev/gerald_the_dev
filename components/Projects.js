import React from 'react'
import { flipInX } from 'react-animations'

const axios = require('axios').default;

export default class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            projects: []
        };

        this.componentDidMount=()=>{
           

        }


    }


    render(){
        return(
            <div className="flex space-x-10 items-center justify-items-stretch">
                 <div className="rounded-md bg-white w-72 h-72 inline-block shadow-xl">
                        <div  className="h-16">
                        <p className="text-center">Frontend</p>
                        </div>
                        <div>
                        <p className="text-center">HTML</p>
                        </div>
                        <div>
                        <p className="text-center">CSS</p>
                        </div>
                        <div>
                        <p className="text-center">SASS</p>
                        </div>
                        <div>
                        <p className="text-center">HTML</p>
                        </div>
                        
                    </div>
                    <div className="rounded-md bg-white w-72 h-72 inline-block shadow-xl">
                        <div  className="h-16">
                        <p className="text-center">Backend</p>
                        </div>
                        <div>
                        <p className="text-center">PHP</p>
                        </div>
                        <div>
                        <p className="text-center">Nodejs</p>
                        </div>
                        <div>
                        <p className="text-center">MongoDB</p>
                        </div>
                        <div>
                        <p className="text-center">SQL</p>
                        </div>
                

                    </div>
                    <div className="rounded-md bg-white w-72 h-72 inline-block shadow-xl">
                        <div  className="h-16">
                        <p className="text-center">Tools</p>
                        </div>
                        
                        <div>
                        <p className="text-center">Git</p>
                        </div>
                        <div>
                        <p className="text-center"></p>
                        </div>
                        <div>
                        <p className="text-center">MongoDB</p>
                        </div>
                        <div>
                        <p className="text-center">SQL</p>
                        </div>
                

                    </div>
    
    
                
            </div>
        )
    }
   
}



