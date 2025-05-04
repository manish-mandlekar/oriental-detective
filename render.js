// Import pages from data.js file
import { pages } from './data.js';

// Get the page ID from URL parameters
const params = new URLSearchParams(window.location.search);
const pageId = parseInt(params.get("page")) || 1;
const pageData = pages[pageId - 1];

if (!pageData) {
  document.body.innerHTML = "<h1>Page Not Found</h1>";
} else {
  console.log("Loading service page:", pageData.title);
  
  // Set page title (if you have a title element in your HTML)
  const pageTitle = document.getElementById("page-title");
  if (pageTitle) {
    pageTitle.textContent = pageData.title;
  }
  
  // Set the main heading
  const mainHeading = document.getElementById("main-heading");
  if (mainHeading) {
    mainHeading.textContent = pageData.title;
  }
  
  // Set the service overview
  const firstServices = document.querySelector(".first-services p");
  if (firstServices) {
    firstServices.textContent = pageData.serviceOverview;
  }

  // Handle the "What We Do" section
  const whatWeDoSection = document.querySelector(".whatwedo");
  if (whatWeDoSection) {
    const whatWeDoTitle = whatWeDoSection.querySelector("h1");
    if (whatWeDoTitle) {
      whatWeDoTitle.textContent = "What We Do?";
    }
    
    const whatWeDoContainer = whatWeDoSection.querySelector(".us");
    if (whatWeDoContainer) {
      whatWeDoContainer.innerHTML = ''; // Clear existing content
      
      // Add all What We Do items
      pageData.whatWeDo.forEach(item => {
        const div = document.createElement("div");
        div.className = "us-cont";
        div.innerHTML = `<span>${item.head} </span>${item.desc}`;
        whatWeDoContainer.appendChild(div);
      });
    }
  }

  // Handle the "When To Contact Us" section
  const whenToContactSection = document.querySelector(".whentocontact");
  if (whenToContactSection) {
    const whenToContactTitle = whenToContactSection.querySelector("h1");
    if (whenToContactTitle) {
      whenToContactTitle.textContent = "When To Contact Us";
    }
    
    const whenToContactList = whenToContactSection.querySelector("ul.us");
    if (whenToContactList) {
      whenToContactList.innerHTML = ''; // Clear existing content
      
      // Add all When To Contact Us items
      pageData.whenToContactUs.forEach(item => {
        const li = document.createElement("li");
        li.className = "us-cont";
        li.innerHTML = `✔ ${item}`;
        whenToContactList.appendChild(li);
      });
    }
  }

  // Handle the "Why Choose Us" section
  const whyChooseUsSection = document.querySelector(".whychoose");
  if (whyChooseUsSection) {
    const whyChooseUsTitle = whyChooseUsSection.querySelector("h1");
    if (whyChooseUsTitle) {
      whyChooseUsTitle.textContent = "Why Choose Us?";
    }
    
    const whyChooseUsContainer = whyChooseUsSection.querySelector(".us");
    if (whyChooseUsContainer) {
      whyChooseUsContainer.innerHTML = ''; // Clear existing content
      
      // Add all Why Choose Us items
      pageData.whyChooseUs.forEach(item => {
        const div = document.createElement("div");
        div.className = "us-cont";
        div.innerHTML = `<span>${item.head} </span>${item.desc}`;
        whyChooseUsContainer.appendChild(div);
      });
    }
  }
}