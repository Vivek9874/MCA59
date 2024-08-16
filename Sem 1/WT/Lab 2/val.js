function validatePassword() {
    var passwordInput = document.getElementById("pass");
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
    if (passwordInput.value.match(passw)) {
        alert('Correct, try another...');
        return true;
    } else {
        alert('Wrong...!');
        return false;
    }
}
