import React from 'react'

const axios = require('axios').default;

export default class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            projects: []
        };

        this.componentDidMount=()=>{
            axios.get('https://api.github.com/users/geraldthedev/repos')
.then((res)=>{

    var data = res.data
    this.setState({
        projects: data
        
    })
    console.log(this.state.projects)
    
})
.catch((err)=>{
    console.log(err)
})

        }

    }


    render(){
        return(
            <div className="flex space-x-4 items-center">
                {this.state.projects.slice(0,5).map((repo, index)=>(
                    <div key={index} className="rounded-md bg-white w-72 h-72 inline-block">
                        <p className="text-center">{repo.name}</p>
                        <p>{repo.description}</p>
                <p>{repo.language}</p>

                    </div>
                ))}
    
                
            </div>
        )
    }
   
}



