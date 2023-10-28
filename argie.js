// Get the about me section element
const aboutMeSection = document.getElementById("about-me");

// Get the about me hyperlink element
const aboutMeHyperlink = document.querySelector("a[href='#about-me']");

// Add an event listener to the about me hyperlink element
aboutMeHyperlink.addEventListener("click", () => {
  // Add a border to the about me section element
  aboutMeSection.style.border = "4px solid #FF5733";
});

// Get the work experience section element
const workExperienceSection = document.getElementById("work-experience");

// Get the work experience hyperlink element
const workExperienceHyperlink = document.querySelector("a[href='#work-experience']");

// Add an event listener to the work experience hyperlink element
workExperienceHyperlink.addEventListener("click", () => {
  // Add a border to the work experience section element
  workExperienceSection.style.border = "4px solid #FF5733";
});

// Get the project section element
const projectSection = document.getElementById("projects");

// Get the project hyperlink element
const projectHyperlink = document.querySelector("a[href='#projects']");

// Add an event listener to the project hyperlink element
projectHyperlink.addEventListener("click", () => {
  // Add a border to the project section element
  projectSection.style.border = "4px solid #FF5733";
});
