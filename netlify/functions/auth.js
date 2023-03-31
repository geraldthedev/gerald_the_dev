import * as jwt from 'jsonwebtoken'



 export default (req, res)=>{

 
    
  return new Promise((resolve)=>{
    const{ method } =req;
    

    try{
      switch(method){
        case 'POST':
          const {name, email, password} =req.body;
          const verify = fetch('z3ngbryant.zendesk.com/api/v2/users',{
            method: "GET",
            credentials: "include",
            headers:{
              "Authorization": `Basic ${process.env.email}/${process.env.apikey}`
            }
           }).then(res=>{
            console.log(res.json())
            })

            const payload ={
              external_id: '8768789',
               email: req.body.email,
               exp: "1639608035",
               name: req.body.name,
               scope: "user"
            
             }
      
             const token = jwt.sign(payload, process.env.auth_token,{
              header: {kid: process.env.kid}
             });
      }
      return resolve()
    }
    

     
    
       
  } catch (error){
    console.log(error)
  })
      
    
}



