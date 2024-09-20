
document.getElementById('resume form')?.addEventListener('submit', function(event) {
    event.preventDefault();
 //get references to fore elements using their ids
 const ProfileElement = (document.getElementById('profile') as HTMLInputElement);
    const nameElement = (document.getElementById('name') as HTMLInputElement).value;
    const emailElement = (document.getElementById('email') as HTMLInputElement).value;
    const phoneElement = (document.getElementById('phone') as HTMLInputElement).value;
    const educationElement = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experienceElement = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skillsElement = (document.getElementById('skills') as HTMLTextAreaElement).value;
     
    //create if fore element present
    if(ProfileElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        
        const resume =
        `Name: ${nameElement}= nameElement.value;
        Email: ${emailElement}= emailElement.value;
        Phone: ${phoneElement}= phoneElement.value;
        Education: ${educationElement}= educationElement.value;
        Experience: ${experienceElement}= experienceElement.value;
        Skills: ${skillsElement}= skillsElement.value;
        ;`

        //picture element
        const profilePicture = ProfileElement.files?.[0];
        const profilePictureURL = profilePicture ? URL.createObjectURL(profilePicture):"";

     const resumeOutput=`
              <h1>Resume</h1>
              ${profilePictureURL}? '<img src="${profilePictureURL}" alt="profile picture" class="profilePicture">' : ''}
              <h2>personal information</h2>
              <p>{personal information}</p>
              <p><strong>Name:</strong>${nameElement}</p>
              <p><strong>Email</strong> ${emailElement}</p>
              <p><strong>Phone:</strong>${phoneElement}</p>
              <h3>Education</h3>
              <p>${educationElement}</p>
              <h3>work Experience</h3>
              <p>${experienceElement}</p>
              <h3>Skills</h3>
              <p>${skillsElement}</p>`


        // resume output
        const resumeOutputElement = document.getElementById('resume-output');
        if(resumeOutputElement) {
            resumeOutputElement.innerHTML = resume;
            resumeOutputElement.style.display="block"
        }else{
            console.error("resume output element not found");
        }
    }
    
})
