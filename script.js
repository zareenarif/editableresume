// Get references to the form display area.
var form = document.getElementById('Resumeform');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var Skills = document.getElementById('Skills').value;
    //Genrate resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n     <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n     <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(Skills, "</p>\n\n    ");
    // Display the genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume element is missing');
    }
});
