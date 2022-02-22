window.onload = () => {
    fetch("http://www.raydelto.org/agenda.php")
    .then(data => data.json())
    .then(contacts =>  {
        let i = 0;
        while(contacts.length > i){
            let contact = contacts[i];
            displayContact(contact.nombre,contact.apellido,contact.telefono);
            console.log(JSON.stringify(contact));
            i++;
        }
    })
}

function displayContact(f_name, l_name, phone){
    let name = contactContainer(f_name,l_name,phone);
    let contactBody = document.getElementById("contact-book-body");
    contactBody.appendChild(name);
}

function createParagraph(val){
    let para = document.createElement("p");
    let text = document.createTextNode(val);
    para.appendChild(text);
    return para;
}

function contactContainer(name,l_name,phone){
    let contactInfo = document.createElement("div");
    let contactName = document.createElement("div");
    let nameDetails = document.createElement("div");
    let nameId = createParagraph(name.charAt(0).toUpperCase());
    let fname = createParagraph(name);
    let lname = createParagraph(l_name);
    let ph = createParagraph(phone);
    let colors = ["#27476e","#f6ae2d","#e7e247","#0cf574","#9a031e","#5f0f40"]
    const randomIdx = Math.floor(Math.random() * colors.length);
    
    contactInfo.setAttribute("class","contact-info");
    contactName.setAttribute("class","contact-name flex");
    nameId.setAttribute("class","nameId"); 
    fname.setAttribute("class","data");
    lname.setAttribute("class","data");
    ph.setAttribute("class","data");
    nameDetails.setAttribute("class","flex name_details");
    nameId.style.background = colors[randomIdx];

    nameDetails.appendChild(nameId);
    nameDetails.appendChild(fname)
    contactName.appendChild(nameDetails);
    contactName.appendChild(lname);
    contactName.appendChild(ph);
    contactInfo.appendChild(contactName);

    return contactInfo;
}


