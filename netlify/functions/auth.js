import jwt from 'jsonwebtoken';



 export default async function Auth(req, res){



         // const {name, email, password} =req.body;
         const verify = fetch('z3ngbryant.zendesk.com/api/v2/users',{
            method: "GET",
            credentials: "include",
            headers:{
              "Authorization": `Basic ${process.env.email}/token:${process.env.apikey}`
            }
           }).then(res=>{
            console.log(res.json())

            const payload ={
              external_id: '8987738',
               email: "victortest@testmail.com",
               exp: 1200,
               name: "Victor Test",
               scope: "user"
            
             }
      
             
            }).finally(y=>{

              const token = jwt.sign(payload, process.env.auth_token,{
                header: {kid: process.env.kid}
               });

               return token
            })

           
            
             
      }
      


