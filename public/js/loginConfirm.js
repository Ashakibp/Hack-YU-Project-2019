function validateForm() {
    let uname = document.forms["login"]["username"].value;
    let pass = document.forms["signup"]["password"].value;
    if (uname == "") {
        alert("User Name must be filled out");
        return false;
    }
    if (pass == "") {
        alert("Password must be filled out");
        return false;
    }
    return true;
}