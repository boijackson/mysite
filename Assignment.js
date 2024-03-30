const patient_name = prompt('J. Medical Clinic need some information about our new patient, Please let us know your name. If you are done, OK to continue. ');
const patient_answer = alert(`You're welcome to J medical clinic : ${patient_name}, OK to continue. `);

const patient_dob = prompt(`${patient_name}: Please enter your Date of Birth
(YYYY-MM-DD): If you are done, OK to continue.`);
const answer = alert(`Thanks ${patient_name}: OK to continue.`);

const patient_age = prompt(`${patient_name} Please let us know how old are you. If you are done, OK to continue.`);
const age_answer = alert(`That's good ${patient_name}: OK to continue.`);

const patient_address = prompt(`${patient_name} Please provide your home Address. If you are done, OK to continue.`);
const Adress = alert(`${patient_name} your Registration is complete, Thank for visiting J Medical Clinic.`);

document.write(`Name:  ${patient_name} <br>`);
document.write(`Date Of Birth: ${patient_dob} <br>`);
document.write(`Age: ${patient_age} <br>`);
document.write(`Address: ${patient_address}`);

//const patientInfo = `patient Information: Name: ${patient_name} ${patient_dob} ${patient_age} ${patient_address}`;

//const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//console.log(array);
// print indices of the array using "for loop"

//for (let i = 0; i < array.length; i++) {
    //console.log(`Index ${i}:`);
//}