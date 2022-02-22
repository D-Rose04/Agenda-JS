window.onload = () => {
    fetch("http://www.raydelto.org/agenda.php")
    .then(data => data.json())
    .then(contacts =>  {
        let i = 0;
        while(contacts.length > i){
            let contact = contacts[i];
            displayContact(contact.nombre,contact.apellido,contact.telefono,i)
            console.log(JSON.stringify(contact));
            i++;
        }
    })
}

let t = document.querySelectorAll(".details");
t.forEach(el => {
    el.addEventListener("click",() => {
        let id = `${el.id}`;
        let f_name = document.getElementsByClassName(id)[0].children[1].innerHTML;
        let l_name = document.getElementsByClassName(id)[0].children[2].innerHTML;
        let phone = document.getElementsByClassName(id)[0].children[3].innerHTML;
        showDetails(f_name,l_name,phone);
    });
});

function showDetails(name,lname,phone){
    document.getElementById("pp_char").innerHTML = `${name.charAt(0)}`;
    document.getElementById("pp_name").innerHTML = `${name} ${lname}`;
    document.getElementById("pp_phone").innerHTML = `${phone}`;
    document.getElementById("modal").style.display = "flex";
}

function displayContact(f_name, l_name, phone,id){
    let name = contactContainer(f_name,id);
    let contactBody = document.getElementById("contact-book-body");
    contactBody.appendChild(name);
}

function createParagraph(val){
    let para = document.createElement("p");
    let text = document.createTextNode(val);
    para.appendChild(text);
    return para;
}

function contactContainer(name,id){
    let contactInfo = document.createElement("div");
    let contactName = document.createElement("div");
    let nameId = createParagraph(name.charAt(0).toUpperCase());
    let fname = createParagraph(name);
    
    contactInfo.setAttribute("class","contact-info flex");
    contactInfo.setAttribute("id",`${id+1}`);
    contactName.setAttribute("class","contact-name flex");
    nameId.setAttribute("class","nameId");
    fname.setAttribute("class","fname");
    
    contactName.appendChild(nameId);
    contactName.appendChild(fname)
    contactInfo.appendChild(contactName);
    return contactInfo;
}


