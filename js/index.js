// Extracting all the necessary components from the DOM
const addContact = document.querySelector(".button");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");  
const submitBtn = document.getElementById("send");
const cancelBtn = document.getElementById("cancel");
const sendBtn = document.getElementById("send");
const inputsText = document.querySelectorAll(".input"); 
var contact = {
    nombre: "",
    apellido: "",
    telefono: ""
} 

// Fetching data from a web service
window.onload = () => {
    fetch("http://www.raydelto.org/agenda.php")
    .then(data => data.json())
    .then(contacts =>  {
        let i = 0;
        while(contacts.length > i){
            let contact = contacts[i];
            displayContact(contact.nombre,contact.apellido,contact.telefono);
            i++;
        }
    });
}

// Adding event listeners to each element that requires it
cancelBtn.addEventListener("click",()=>{
    cleanFields();
    modal.style.display = "none";
});

closeBtn.addEventListener("click",()=>{
    cleanFields();
    modal.style.display = "none";
});

sendBtn.addEventListener("click",() =>{
    sendContact(contact);
    console.log(contact);    
});

addContact.addEventListener("click",()=>{
    modal.style.display = "flex";
});
