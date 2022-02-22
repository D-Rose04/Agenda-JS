// Appends every contact within contact book body 
function displayContact(f_name, l_name, phone){
    let name = contactContainer(f_name,l_name,phone);
    let contactBody = document.getElementById("contact-book-body");
    contactBody.appendChild(name);
}

// Create a new paragraph with text and returns it 
function createParagraph(val){
    let paragraph = document.createElement("p");
    let text = document.createTextNode(val);
    paragraph.appendChild(text);
    return paragraph;
}

// Create a container with all contact info and returns it
function contactContainer(name,l_name,phone){
    // Elements definition
    let contactInfo = document.createElement("div");
    let contactName = document.createElement("div");
    let nameDetails = document.createElement("div");
    let nameId = createParagraph(name.charAt(0).toUpperCase());
    let fname = createParagraph(name);
    let lname = createParagraph(l_name);
    let ph = createParagraph(phone);
    
    // Asign random color 
    let colors = ["#27476e","#f6ae2d","#e7e247","#0cf574","#9a031e","#5f0f40"]
    const randomIdx = Math.floor(Math.random() * colors.length);
    nameId.style.background = colors[randomIdx];

    // Class asignment
    contactInfo.setAttribute("class","contact-info");
    contactName.setAttribute("class","contact-name flex");
    nameId.setAttribute("class","nameId"); 
    fname.setAttribute("class","data");
    lname.setAttribute("class","data");
    ph.setAttribute("class","data");
    nameDetails.setAttribute("class","flex name_details");
    
    // Setting elements to container
    nameDetails.appendChild(nameId);
    nameDetails.appendChild(fname)
    contactName.appendChild(nameDetails);
    contactName.appendChild(lname);
    contactName.appendChild(ph);
    contactInfo.appendChild(contactName);

    return contactInfo;
}

// Cleans each text field within the modal container
function cleanFields(){
    inputsText.forEach(input => {
        input.value = "";
    });
}

function sendContact(contact){
    getValues(contact);
    cleanFields();
    
    fetch("http://www.raydelto.org/agenda.php",
        {
            method:"POST",
            body: JSON.stringify(contact)
        })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        if(response.exito === true){alert("Contacto agregado de manera satisfactoria")};
        
    })

}

function getValues(contact){
    let vals = [];
    inputsText.forEach(input => {
        vals.push(input.value);
    });    
    
    contact.nombre = vals[0];
    contact.apellido = vals[1];
    contact.telefono = vals[2];
    console.log(contact);
}