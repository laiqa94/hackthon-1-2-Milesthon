var _a;
(_a = document.getElementById('resume form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //get references to fore elements using their ids
    var ProfileElement = document.getElementById('profile');
    var nameElement = document.getElementById('name').value;
    var emailElement = document.getElementById('email').value;
    var phoneElement = document.getElementById('phone').value;
    var educationElement = document.getElementById('education').value;
    var experienceElement = document.getElementById('experience').value;
    var skillsElement = document.getElementById('skills').value;
    //create if fore element present
    if (ProfileElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var resume = "Name: ".concat(nameElement, "= nameElement.value;\n        Email: ").concat(emailElement, "= emailElement.value;\n        Phone: ").concat(phoneElement, "= phoneElement.value;\n        Education: ").concat(educationElement, "= educationElement.value;\n        Experience: ").concat(experienceElement, "= experienceElement.value;\n        Skills: ").concat(skillsElement, "= skillsElement.value;\n        ;");
        //picture element
        var profilePicture = (_a = ProfileElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicture ? URL.createObjectURL(profilePicture) : "";
        var resumeOutput = "\n              <h1>Resume</h1>\n              ".concat(profilePictureURL, "? '<img src=\"").concat(profilePictureURL, "\" alt=\"profile picture\" class=\"profilePicture\">' : ''}\n              <h2>personal information</h2>\n              <p>{personal information}</p>\n              <p><strong>Name:</strong>").concat(nameElement, "</p>\n              <p><strong>Email</strong> ").concat(emailElement, "</p>\n              <p><strong>Phone:</strong>").concat(phoneElement, "</p>\n              <h3>Education</h3>\n              <p>").concat(educationElement, "</p>\n              <h3>work Experience</h3>\n              <p>").concat(experienceElement, "</p>\n              <h3>Skills</h3>\n              <p>").concat(skillsElement, "</p>");
        // resume output
        var resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resume;
            resumeOutputElement.style.display = "block";
        }
        else {
            console.error("resume output element not found");
        }
    }
});
