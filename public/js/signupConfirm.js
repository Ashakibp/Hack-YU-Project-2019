function validateForm() {
    let fname = document.forms["signup"]["firstname"].value;
    let lname = document.forms["signup"]["lastname"].value;
    let uname = document.forms["signup"]["username"].value;
    let pass = document.forms["signup"]["password"].value;
    let confirm = document.forms["signup"]["confirm"].value;
    if (fname == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (lname == "") {
        alert("Last Name must be filled out");
        return false;
    }
    if (uname == "") {
        alert("User Name must be filled out");
        return false;
    }
    if (pass == "") {
        alert("Password must be filled out");
        return false;
    }
    if (confirm !== pass) {
        alert("Passwords don't match");
        return false;
    }
    return true;
}