window.onload = () => {
    fetch("http://www.raydelto.org/agenda.php")
    .then(data => data.json())
    .then(contacts =>  {
        let i = 0;
        if(localStorage !== null) 
        while(contacts.length > i){
            let contact = contacts[i];
            // let result = filterContactByChar(contact.nombre,"a"); 
            // if(result != undefined) {};

            localStorage.setItem(`contact-${i+1}`,JSON.stringify(contacts[i]));
            displayContact(contact.nombre,contact.apellido,contact.telefono);
            i++;
        }
    })
}



function clearcache(){
    localStorage.clear();
}

function displayContact(f_name, l_name, phone){
    let contact = `${f_name} ${l_name} ${phone}`;
    console.log(contact);
}

function filterContactByChar(contact, char){
    if(!filtered) {return contact};
    let firstChar = contact.charAt(0).toLowerCase();
    if (firstChar === char) {return contact};
}
