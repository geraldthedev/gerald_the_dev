import jwt from 'jsonwebtoken';



 export default async function Auth(req, res){



         // const {name, email, password} =req.body;
         /* const verify = fetch('z3ngbryant.zendesk.com/api/v2/users',{
            method: "GET",
            credentials: "include",
            headers:{
              "Authorization": `Basic ${process.env.email}/token:${process.env.apikey}`
            }
           }).then(res=>{
            console.log(res.json())
            })*/
            const issuedAt = Date.now()
            const payload ={
              external_id: '8987738',
               email: "victortest@testmail.com",
               iat: issuedAt,
               name: "Victor Test",
               scope: "user"
            
             }
      
             const token = jwt.sign(payload, process.env.auth_token,{
              header: {kid: process.env.kid}
             });
            
             return token
      }
      


