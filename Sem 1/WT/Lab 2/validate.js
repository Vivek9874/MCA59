function validateForm() {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var pass1 = document.getElementById("pass").value;
    var pass2 = document.getElementById("conpass").value;
    var name = document.getElementById("name").value;
    var phno = document.getElementById("phno").value;
    var eid = document.getElementById("eid").value;

    var nameError = document.getElementById("name-error");
    var phnoError = document.getElementById("phno-error");
    var eidError = document.getElementById("eid-error");
    var passError = document.getElementById("pass-error");
    var conpassError = document.getElementById("conpass-error");

    nameError.textContent = "";
    phnoError.textContent = "";
    eidError.textContent = "";
    passError.textContent = "";
    conpassError.textContent = "";

    var isValid = true;

    if (!name.trim()) {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if (!phno.match(/^\d{10}$/)) {
        phnoError.textContent = "Invalid phone number format";
        isValid = false;
    }

    if (!eid.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        eidError.textContent = "Invalid email format";
        isValid = false;
    }

    if (!pass1.match(passw)) {
        passError.textContent = "Password must contain at least one digit, one lowercase letter, one uppercase letter, and be between 6 to 20 characters.";
        isValid = false;
    }

    if (pass1 !== pass2) {
        conpassError.textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert('Submitted');
    }

    return isValid;
}