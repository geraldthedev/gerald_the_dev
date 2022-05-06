import React from 'react'

 


const axios = require('axios').default;

export default class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            showing: false
        };
    this.componentDidMount=()=>{
        this.setState({
            showing: true
        })
    }
        
    }

    render(){
        
        return(
            <div className="flex space-x-10 items-center justify-items-stretch facts box-content">
                
                <div onLoad={()=> this.setState({ showing: !showing})} className="text-lg w-96 h-72">
                    <p> I'm a Web Developer based out of Atlanta, Ga. who is passionate about creating new experiences across the web. Let me help you bring your ideas to life. <br></br> 
                    <br></br>
                    I'm open to projects that involve adding functionality and tools to webpages, creating web applications, and website optimization. Check out my GitHub to view more of my projects. Use the form below to contact me. 
                    </p>
                </div>
                
               
                 <div className="rounded-md bg-white inline-block shadow-xl">
                        <div  className="h-16">
                        <p className="text-center">Frontend</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 ">
                        <div>
                        <img src='html5.svg'></img>
                        </div>
                        <div>
                        <img src='sass-1.svg'></img>
                        </div>
                        <div className ='col-span-2'>
                        <img className='react-logo'  src='react-2.svg'></img>
                        </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-white inline-block shadow-xl">
                        <div  className="h-16">
                        <p className="text-center">Backend</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                        <div>
                        <img src="php-1.svg"></img>
                        </div>
                        <div>
                        <img src="nodejs.svg"></img>
                        </div>
                        <div>
                        <img src="mongodb.svg"></img>
                        </div>
                        <div>
                        <img src="mysql-5.svg"></img>
                        </div>

                        </div>
                        
                

                    </div>
                 
            </div>
        )
    }
   
}



