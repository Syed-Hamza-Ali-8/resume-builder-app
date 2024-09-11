let workExpBtn = document.getElementById("weAddButton");

workExpBtn.addEventListener("click", () => {

    let textAreaNode = document.createElement("textarea");
    textAreaNode.classList.add("form-control");
    textAreaNode.classList.add("weField");
    textAreaNode.classList.add("mt-2");
    textAreaNode.setAttribute("rows", 3);
    textAreaNode.setAttribute("placeholder", "ENTER HERE")

    let workExperience = document.querySelector("#workExperience");
    let weAddButton = document.getElementById("weAddButton");

    workExperience.appendChild(textAreaNode, weAddButton);
})

let aqAddButton = document.getElementById("aqAddButton");

aqAddButton.addEventListener("click", () => {

    let textAreaNode2 = document.createElement("textarea");
    textAreaNode2.classList.add("form-control");
    textAreaNode2.classList.add("weField");
    textAreaNode2.classList.add("mt-2");
    textAreaNode2.setAttribute("rows", 3);
    textAreaNode2.setAttribute("placeholder", "ENTER HERE")

    let qualification = document.querySelector("#qualification");
    let aqAddButton = document.getElementById("aqAddButton");

    qualification.appendChild(textAreaNode2, aqAddButton)
})

const generateResume = document.getElementById("generate-Resume")
generateResume.addEventListener("click", () => {

    let nameField = document.getElementById("name").value;
    let userName = document.getElementById("username");
    userName.innerHTML = nameField;
    document.getElementById("main-name").innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    let contactNum = document.getElementById("contact-num");
    contactNum.innerText = contactField;

    let dateField = document.getElementById("dateField").value;
    let dateOfBirth = document.getElementById("DOB");
    dateOfBirth.innerText = dateField;

    let addressField = document.getElementById("addressField").value;
    let address = document.getElementById("address");
    address.innerText = addressField;

    let fbField = document.getElementById("fbField").value;
    let link1 = document.getElementById("link-1");
    link1.innerText = fbField;
    link1.style.cursor = "pointer";
    link1.style.textDecoration = "underline";

    let instaField = document.getElementById("instaField").value;
    let link2 = document.getElementById("link-2");
    link2.innerText = instaField;
    link2.style.cursor = "pointer";
    link2.style.textDecoration = "underline";

    let linkedField = document.getElementById("linkedField").value;
    let link3 = document.getElementById("link-3");
    link3.innerText = linkedField;
    link3.style.cursor = "pointer";
    link3.style.textDecoration = "underline";

    let objective = document.getElementById("objective").value;
    let objField = document.getElementById("obj-field");
    objField.innerText = objective;

    let wrokExp = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wrokExp) {
        str = str + `<li> ${e.value} </li>`;
    }

    let work = document.getElementById("work");
    work.innerHTML = str;

    let academicQualification = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let i of academicQualification) {
        str1 += `<li> ${i.value} </li>`;
    }


    document.getElementById("academic-qual").innerHTML = str1;

    const resumeForm = document.getElementById("resume-form");
    resumeForm.style.display = "none";

    const resumeTemplate = document.getElementById("resume-template");
    resumeTemplate.style.display = "block";

})

let printBtn = document.getElementById("print-btn");
printBtn.addEventListener("click", () => {
    window.print();
})