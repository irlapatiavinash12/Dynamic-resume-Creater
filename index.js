const inputName = document.getElementById("name");

const email = document.getElementById("email");

const mobile = document.getElementById("mobile");

const linkedin = document.getElementById("linkedin");

const photo = document.getElementById("photo");

const summary = document.getElementById("summary");

const college = document.getElementById("college")

const degree = document.getElementById("degree");

const starting = document.getElementById("starting");

const completion = document.getElementById("completion");

const  skills = document.getElementById("skills");

const projectTitle = document.getElementById("projectTitle");

const projectDescription = document.getElementById("projectDescription");

const addButton = document.getElementById("addProjectButton");

const projectInputsContainer = document.getElementById("projectInputsContainer");

const buttonsContainer = document.getElementById("buttonsContainer");

const mainContainer = document.getElementById("mainContainer");

const errorContainer = document.getElementById("errorContainer");

let isDarkMode = false 



//Buttons 
const previewButton = document.getElementById("previewButton");
const printResume = document.getElementById("printResume");
const exportPdf = document.getElementById("exportPdf");
const darkMode = document.getElementById("darkMode");

//Preview Container
const previewContainer  = document.getElementById("previewContainer");
previewContainer.classList.add("previewContainer");


darkMode.addEventListener("click" , () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode){
        mainContainer.style.backgroundColor = "#000000"
        mainContainer.style.color = "#ffffff"
        darkMode.textContent = `${isDarkMode ? "Light Mode " : "Dark Mode"}`
        darkMode.style.color = "#000000";
        darkMode.style.backgroundColor = "#ffffff";

    }
    else{
        mainContainer.style.backgroundColor = "#ffffff"
        mainContainer.style.color = "#000000"
        darkMode.textContent = `${isDarkMode ? "Light Mode " : "Dark Mode"}`
        darkMode.style.color = "#ffffff";
        darkMode.style.backgroundColor = "#000000";
    }

})



addButton.addEventListener("click", () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("each-input-container","projects-container");

    const labelText = document.createElement("label");
    labelText.textContent = "Title"
    labelText.classList.add("label-styling")
    wrapper.appendChild(labelText);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "";
    titleInput.classList.add("each-Project-input");
    wrapper.appendChild(titleInput);

    const labelTextDescription = document.createElement("label");
    labelTextDescription.textContent = "Description"
    labelTextDescription.classList.add("label-styling")
    wrapper.appendChild(labelTextDescription);

    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.placeholder = "";
    descriptionTextarea.classList.add("each-project-text-area");
    descriptionTextarea.cols = 120;
    descriptionTextarea.rows = 10 

    wrapper.appendChild(descriptionTextarea);
    projectInputsContainer.appendChild(wrapper);
});





function renderPreview() {
    previewContainer.innerHTML = ""; // Clear previous preview

    const profileDetailsContainer = document.createElement("div");
    profileDetailsContainer.classList.add("profile-container");
    profileDetailsContainer.style.borderColor = "black"; // Red border
    previewContainer.appendChild(profileDetailsContainer);

    const profileImageElement = document.createElement("img");
    profileImageElement.style.margin = "auto"
    const imgFile = photo.files[0];
    profileImageElement.src = URL.createObjectURL(imgFile);
    profileDetailsContainer.appendChild(profileImageElement);

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "☎ " + mobile.value;
    profileDetailsContainer.appendChild(phoneNumber);

    const gmailText = document.createElement("p");
    gmailText.innerHTML = `<i class="fa-solid fa-envelope"></i> ${email.value}`;
    profileDetailsContainer.appendChild(gmailText);

    const linkedIn = document.createElement("a");
    linkedIn.href = linkedin.value
    linkedIn.style.color = "grey"
    linkedIn.target = "_blank";
    linkedIn.style.width = "200px";
    linkedIn.innerHTML = `<i class="fa-brands fa-linkedin"></i> ${linkedin.value.slice(0,25)}`;
    profileDetailsContainer.appendChild(linkedIn);

    const educationHeading = document.createElement("h2");
    educationHeading.textContent = "Education";
    profileDetailsContainer.appendChild(educationHeading);

    const collegeName = document.createElement("p");
    collegeName.textContent = college.value;
    profileDetailsContainer.appendChild(collegeName);

    const degreeElement = document.createElement("p");
    degreeElement.textContent = degree.value;
    profileDetailsContainer.appendChild(degreeElement);

    const collegeDuration = document.createElement("p");
    collegeDuration.textContent = starting.value + " - " + completion.value;
    profileDetailsContainer.appendChild(collegeDuration);

    const skillsHeading = document.createElement("h2");
    skillsHeading.textContent = "Skills";
    profileDetailsContainer.appendChild(skillsHeading);

    const skillsList = document.createElement("ul");
    const skillsData = skills.value.split(",");
    skillsData.forEach(eachItem => {
        const item = document.createElement("li");
        item.textContent = eachItem.trim();
        skillsList.appendChild(item);
    });
    profileDetailsContainer.appendChild(skillsList);

    const resumeRightData = document.createElement("div");
    resumeRightData.classList.add("main-details-section");
    //resumeRightData.style.borderColor = "2px solid blue"; // Blue border
    previewContainer.appendChild(resumeRightData);

    const nameElement = document.createElement("h2");
    nameElement.textContent = inputName.value;
    nameElement.classList.add("name-styling");
    resumeRightData.appendChild(nameElement);

    const profileSummary = document.createElement("h3");
    profileSummary.textContent = "Profile Summary";
    resumeRightData.appendChild(profileSummary);

    const summaryDescription = document.createElement("p");
    summaryDescription.textContent = summary.value;
    resumeRightData.appendChild(summaryDescription);

    const projectHeading = document.createElement("h3");
    projectHeading.innerHTML = `<i class="fa-solid fa-suitcase"></i> Projects/Achievements`;
    resumeRightData.appendChild(projectHeading);



    // const projectTitleElement = document.createElement("h1");
    // projectTitleElement.textContent = projectTitle.value;
    // resumeRightData.appendChild(projectTitleElement);

    // const projectSummary = document.createElement("p");
    // projectSummary.textContent = projectDescription.value;
    // resumeRightData.appendChild(projectSummary);


    const allProjects = document.querySelectorAll(".projects-container");
    console.log(allProjects);

    allProjects.forEach(wrapper => {
    const title = wrapper.querySelector(".each-Project-input").value;
    console.log(title)
    const description = wrapper.querySelector(".each-project-text-area").value;
    console.log(description)

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    resumeRightData.appendChild(titleElement);

    const descElement = document.createElement("p");
    descElement.textContent = description;
    resumeRightData.appendChild(descElement);

    });


}



previewButton.addEventListener("click",() => {

    if (inputName.value !== "" && mobile.value!==""&& linkedin.value && college.value!== "" && starting.value !== "" && completion.value!==""&& skills.value !== "" && projectTitle.value!== "" && projectDescription.value !== ""){
        errorContainer.textContent = "";
        renderPreview()
    }
    else{
        
        errorContainer.innerHTML = ""; 
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Fill all the Fields"
        errorMessage.style.color = "red"
        errorMessage.textAlign = "center"
        errorContainer.appendChild(errorMessage);

    }

})



