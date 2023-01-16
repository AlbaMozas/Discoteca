const myArray = [];
let newUser = {
  email: "",
  password: "",
  role: "invitado",
};
const invalidPassword = () => {
  alert("invalid Password");
};

const userRegister = async() => {
  let inputUser$$ = document.querySelector(".inputUser")
  let inputPasswor$$ = document.querySelector(".inputpassword");
  let inputPasswordConfirm$$ = document.querySelector(".inputpasswordConfirm" );
  let regexNom= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
 
 if(inputPasswor$$.value === inputPasswordConfirm$$.value && inputPasswor$$.value.match(regexNom) ){
  newUser = {
    email: inputUser$$.value,
    password: inputPasswor$$.value,
    role: "invitado"
  }}else{
    return invalidPassword()
  }
  let pushUSer = JSON.stringify(newUser);
const res=await fetch('http://127.0.0.1:5001/usuarios/register',
{method : 'POST', body : pushUSer,headers:{
'Content-Type':'application/json'
}})
  console.log(pushUSer);
  };

let botonSinUp$$ = document.querySelector(".botonSinUp");


botonSinUp$$.addEventListener("click", userRegister);
// let array= async()=>{
//      await userRegister();
//      console.log(myArray);

// }
