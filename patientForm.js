// show greeting with username
let greeting = document.getElementById("greeting");
greeting.innerText = `Welcome, ${JSON.parse(localStorage.getItem("Username"))}!`;

const storePatientInfo = () => {
    let patientInfo = {
        name: [
            document.getElementById("firstName").value,
            document.getElementById("middleName").value,
            document.getElementById("lastName").value
        ],
        address: document.getElementById("address").value,
        birthdate: document.getElementById("birthdate").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        contactNumber: document.getElementById("contact-number").value,
        medicalHistory: [],
        currentSymptoms: [],
        medication: document.querySelector('input[name=medication]:checked').value
    }

    let medHistory = document.querySelectorAll('input[name="med-history"]');
    [...medHistory].forEach(condition => {
        if (condition.checked) patientInfo.medicalHistory.push(condition.value);
    });

    let symptomList = document.getElementById("symptoms").getElementsByTagName("option");
    [...symptomList].forEach(symptom => {
        if (symptom.selected) patientInfo.currentSymptoms.push(symptom.value);
    });

    localStorage.setItem("Patient Information", JSON.stringify(patientInfo, null, 2));
    console.log("Patient information stored successfully.");
}

let btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener('click', storePatientInfo);