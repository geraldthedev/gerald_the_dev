import * as jwt from 'jsonwebtoken'



 const Auth = ()=>{

     
    const payload ={
        name: '#{customerName}',
         email: '#{customerEmail}',
         exp: 100000,
         external_id: '#{customerIdentifier}'
      
       }

       const token = jwt.sign(payload, process.env.auth_token,{
        header: {kid: process.env.kid}
       });
    return token
}

module.exports = Auth()

