let patientInfo = {};
patientInfo = JSON.parse(localStorage.getItem("Patient Information"));

let fullName = document.getElementById("name");
fullName.innerText = patientInfo.name.join(' ');

let address = document.getElementById("address");
address.innerText = patientInfo.address;

let birthdate = document.getElementById("birthdate");
birthdate.innerText = patientInfo.birthdate;

let gender = document.getElementById("gender");
gender.innerText = patientInfo.gender;

let contactNumber = document.getElementById("contact-number");
contactNumber.innerText = patientInfo.contactNumber;

let medicalHistory = document.getElementById("medical-history");
if (!patientInfo.medicalHistory.length) medicalHistory.innerText = "None";
else medicalHistory.innerText = patientInfo.medicalHistory.join(', ');

let symptoms = document.getElementById("symptoms");
if (!patientInfo.currentSymptoms.length) symptoms.innerText = "None";
else symptoms.innerText = patientInfo.currentSymptoms.join(', ');

let medication = document.getElementById("medication");
medication.innerText = patientInfo.medication;