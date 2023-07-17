function validateForm() {
    var firstName = document.forms["myForm"]["firstname"].value;
    var lastName = document.forms["myForm"]["lastname"].value;
    var dob = document.forms["myForm"]["dob"].value;
    var phoneNumber = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    var address = document.forms["myForm"]["address"].value;
    var phoneNumberValidation=/^([+]\d{2})?\d{10}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   
    if (firstName.trim() === "") {
        alert("Please enter your first name");
        return false;
    }

    if (!/^[A-Za-z][A-Za-z\s]*$/.test(firstName)) {
        alert("Please enter a valid first name (letters and spaces only, should not start with a space or contain digits)");
        return false;
    }

    if (/\d/.test(firstName)) {
        alert("First name should not contain digits");
        return false;
    }

    if (firstName.length > 30) {
        alert("First name should not exceed 30 characters");
        return false;
    }

    if (lastName.trim() === "") {
        alert("Please enter your last name");
        return false;
    }

    if (!/^[A-Za-z][A-Za-z\s]*$/.test(lastName)) {
        alert("Please enter a valid last name (letters and spaces only, should not start with a space or contain digits)");
        return false;
    }

    if (/\d/.test(lastName)) {
        alert("Last name should not contain digits");
        return false;
    }

    if (lastName.length > 30) {
        alert("Last name should not exceed 30 characters");
        return false;
    }

    if (dob === "") {
        alert("Please enter your date of birth");
        return false;
    }
    if (!validateDOB(dob)) {
        alert("Please enter a vaild date of birth i.e., your age should be greater than 12");
        return false;
    }

    if (phoneNumber === "") {
        alert("Please enter your phone number");
        return false;
    }

    if (!phoneNumberValidation.test(phoneNumber)) {
        alert("Phone number should be 10 digits");
        return false;
    }

    if (email === "") {
        alert("Please enter your email");
        return false;
    }
    if(!emailPattern.test(email)){
        alert("invalid email enter a valid one");
        return false;
    }

    if (!/^[\w\s.-]+/.test(address)) {
        alert("Please enter a valid address");
        return false;
    }

    if (address.length > 50) {
        alert("Address should not exceed 50 characters");
        return false;
    }
}
function validateDOB(dob) {
    var date = new Date(dob);

    if (date.toString() === "Invalid Date") {
        return false;
    } else {
        var today = new Date();
        var minAge = 12;
        var minAgeDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

        if (date > minAgeDate) {
            return false;
        } else {
            return true;
        }
    }
}
