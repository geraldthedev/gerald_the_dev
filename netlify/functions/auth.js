import jwt from 'jsonwebtoken'

const token =jwt.sign({ scope: 'user', external_id: '123456578'}, process.env.auth_token,{
    header: {kid: process.env.kid}
   })
  
   const payload ={
    name: '#{customerName}',
     email: '#{customerEmail}',
     exp: '#{timestamp}',
     external_id: '#{customerIdentifier}'
  
   }