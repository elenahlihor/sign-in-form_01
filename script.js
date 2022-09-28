const form = document.querySelector("#signin-card");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorElement = document.querySelector("#error");

form.addEventListener("submit", (e)=>{
   let messages= []; 
   if(password.length <= 8){
    messages.push("The password must be at least 8 characthers")
    password.style.border= "1px solid red"
   }
   
   if(messages.length > 0){
    e.prevntDefoult();
    errorElement.innerText = messages.join(" , ")
   }
})