export default  function generatePass(){
let password:string =''
let characteres:string='Aa@$#123456789abcdefghijFGHIJKLMNOP!'
let passwordLength =8

for (let  index =0; index < passwordLength; index++){
 
   password += characteres.charAt(Math.floor(Math.random()*characteres.length)) 

}

return password

}