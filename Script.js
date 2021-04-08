//function to reset input
function reset() {
    document.getElementById("studentEnrollment").reset();
}

//function to validate name input
function validate() {
    var name = document.getElementById("name").value;

    if (name == "" || name == null)
    {
        alert("Name must be filled");
        return false;
    }
    else 
    {
        validateEmail();
    }
}

//function to validate email
function validateEmail() {
    var email = document.getElementById("email").value;
    if (email == "" || email == null) {
        alert("Email must be filled");
        return false;
    }

    var validRegex = /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;
    if (/[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/.test(studentEnrollment.email.value))
    {
        validateWeb();
    }

    else {
        alert("Invalid email address!");
        document.getElementById("email").focus();
        return false;
    }
}

//function to validate website
function validateWeb() {
    var web = document.getElementById("website").value;
    if (web == "" || web == null) {
        alert("Website must be filled");
        return false;
    }
    if (/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(studentEnrollment.website.value)) {
        validateImage();
    }
    else {
        alert("Invalid web address!");
        document.getElementById("website").focus();
        return false;
    }
}

//function to validate image link
function validateImage() {
    var img = document.getElementById("image").value;
    if (img == "" || img == null) {
        alert("Image link must be filled");
        return false;
    }
    else {
        resultView();
    }
}

//function to show the updated table
function resultView() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var web = document.getElementById("website").value;
    var website = "<a href=http://" + web + " target='_blank'>" + web + "</a>";

    var gender;
    if (document.getElementById("male").checked)
        gender = document.getElementById("male").value;
    else if (document.getElementById("female").checked){
        gender = document.getElementById("female").value;
    }

    var skills ="";
    if (document.getElementById("java").checked)
        skills = document.getElementById("java").value;
    if (document.getElementById("html").checked)
        skills = skills + ", " + document.getElementById("html").value;
    if (document.getElementById("css").checked)
        skills = skills +", "+ document.getElementById("css").value;
    var link = document.getElementById("image").value;

    var table = document.getElementById("result");
    var finalView = "<b>" + name + "</b>" + "</br>" + gender + "</br>" + email + "</br>" + website + "</br>" + skills ; 
    var finalViewImg = "<img src=" + link + " width='150' height='150'>";
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = finalView ;
    cell2.innerHTML = finalViewImg;

    document.getElementById("studentEnrollment").reset();
}